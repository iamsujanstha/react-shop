import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@src/api/product.api";
import { Product } from "../../../types/types";
import Styled from "./styles";
import Rating from "@components/ui/Rating";
import { productStock } from "@src/utils/product-stock";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [mainImage, setMainImage] = useState<string | undefined>(product?.thumbnail);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
        setMainImage(data?.thumbnail);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    })();
  }, [id]);

  const { brand, price, category, rating, stock, title, description, images, reviews, weight, warrantyInformation, discountPercentage } = product || {};
  const stockMessage = useMemo(() => productStock(stock || 0), [stock]);

  const handleThumbnailClick = (imageUrl: string) => () => {
    setMainImage(imageUrl);
  };
  const actualPrice = (price || 0) - ((price || 0) * (discountPercentage || 0) / 100);
  const totalRatings = reviews?.reduce((acc, curr) => acc + curr.rating, 0);

  return (
    <Styled.ProductContainer>
      <Styled.ThumbnailContainer>
        {images &&
          images.map((img, index) => (
            <Styled.SmallThumbnail
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={handleThumbnailClick(img)}
              style={{
                cursor: 'pointer',
                width: '80px',
                height: '80px',
                marginBottom: '5px',
                border: mainImage === img ? '2px solid blue' : '1px solid #ccc',
              }}
            />
          ))}
      </Styled.ThumbnailContainer>
      <Styled.Thumbnail
        src={mainImage || "/fallback-image.jpg"}
        alt={title || "Product"}
        width={450}
        height={450}
        onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
      />
      <Styled.Content>
        <Styled.Title>{title || "No Title Available"}</Styled.Title>
        <Styled.Category>{brand ? `${brand} - ${category}` : "No Category Available"}</Styled.Category>
        <Styled.Price>
          <span className="discounted">${actualPrice.toFixed(2)}</span>
          <span className="original">${price}</span>
          <span className="discountedPer">{discountPercentage}% off</span>
        </Styled.Price>
        <Styled.Rating>
          <Rating value={rating || 0} />
          <span>{totalRatings} Ratings & {reviews?.length} Reviews</span>
        </Styled.Rating>
        <Styled.Stock stock={stock || 0}>{stockMessage}</Styled.Stock>
        {[
          ["Brand", brand],
          ["Description", description],
          ["Category", category],
          ["Quantity", weight],
          ["Warranty", warrantyInformation],
        ].map(([label, value], index) => (
          <Styled.Grid key={index}>
            <Styled.GridItem key={index}>
              <span style={{ color: '#9e8b8b' }}>{label} </span>
            </Styled.GridItem>
            {value || "N/A"}
          </Styled.Grid>
        ))}
        <Styled.Reviews>
          <p>Rating & Reviews</p>
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <Styled.ReviewCard key={index}>
                <Styled.ReviewHeader>
                  <Rating value={review.rating} />
                </Styled.ReviewHeader>
                <Styled.ReviewText>{review.comment}</Styled.ReviewText>
                <span>{review.reviewerName}</span>
                <span>{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
              </Styled.ReviewCard>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </Styled.Reviews>
      </Styled.Content>
    </Styled.ProductContainer>
  );
};

export default ProductDetails;
