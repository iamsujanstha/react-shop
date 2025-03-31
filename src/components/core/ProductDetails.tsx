import { getProductById } from "@src/api/product.api";
import { Product } from "../../types/types";
import { useEffect, useState } from "react";
import {
  ProductContainer,
  Thumbnail,
  Title,
  Category,
  Price,
  Rating,
  Stock,
  Description,
  ThumbnailContainer, // Create a container for thumbnails
  SmallThumbnail,     // Create a component for individual small thumbnails
} from "./product-detail.styles"; // Make sure to add these to your styles

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [mainImage, setMainImage] = useState<string | undefined>(product?.thumbnail); // State for the currently displayed main image

  useEffect(() => {
    (async () => {
      try {
        const data = await getProductById(2);
        setProduct(data);
        setMainImage(data?.thumbnail); // Initialize main image with the thumbnail
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    })();
  }, []);

  const { thumbnail, brand, price, category, rating, stock, title, description, images } = product || {};

  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  return (
    <ProductContainer>
      <div style={{ display: 'flex' }}> {/* Container for thumbnails and main image */}
        <ThumbnailContainer>
          {images &&
            images.map((img, index) => (
              <SmallThumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(img)}
                style={{
                  cursor: 'pointer',
                  width: '50px', // Adjust as needed
                  height: '50px', // Adjust as needed
                  marginBottom: '5px', // Add some spacing
                  border: mainImage === img ? '2px solid blue' : '1px solid #ccc', // Highlight selected
                }}
              />
            ))}
          {thumbnail && !images?.includes(thumbnail) && (
            <SmallThumbnail
              src={thumbnail}
              alt="Main Thumbnail"
              onClick={() => handleThumbnailClick(thumbnail)}
              style={{
                cursor: 'pointer',
                width: '50px', // Adjust as needed
                height: '50px', // Adjust as needed
                marginBottom: '5px', // Add some spacing
                border: mainImage === thumbnail ? '2px solid blue' : '1px solid #ccc', // Highlight selected
              }}
            />
          )}
        </ThumbnailContainer>
        <Thumbnail src={mainImage || ""} alt={title || "Product"} />
      </div>
      <Title>{title || "No Title Available"}</Title>
      <Category>{brand ? `${brand} - ${category}` : "No Category Available"}</Category>
      <Price>₹{price || "N/A"}</Price>
      <Rating>Rating: {rating || "N/A"} ⭐</Rating>
      <Stock inStock={stock ? stock > 0 : false}>
        {stock ? (stock > 0 ? "In Stock" : "Out of Stock") : "Stock Unavailable"}
      </Stock>
      <Description>{description || "No Description Available"}</Description>
    </ProductContainer>
  );
};

export default ProductDetails;