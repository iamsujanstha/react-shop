import React, { useMemo } from 'react';
import { Product } from '../../../types/types';
import { productStock } from '../../../utils/product-stock';
import { Styled } from './styles';



interface IProductItemsProps {
  product: Product;
}

const ProductItems: React.FC<IProductItemsProps> = ({ product }) => {
  const { thumbnail, brand, price, category, rating, stock, title, discountPercentage } = product;

  const stockMessage = useMemo(() => productStock(stock), [stock]);

  const actualPrice = price - (price * discountPercentage / 100);
  return (
    <Styled.Item>
      <Styled.ImageContainer>
        <Styled.Image src={thumbnail} alt={title} />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Brand>{brand}</Styled.Brand>
        <Styled.Category>{category}</Styled.Category>
        <Styled.Price>
          <span className="discounted">${actualPrice.toFixed(2)}</span>
          <span className="original">${price}</span>
          <span className="discountedPer">{discountPercentage}% off</span>
        </Styled.Price>
        <Styled.Rating>⭐ {rating} / 5</Styled.Rating>
        <Styled.Stock stock={stock}>{stockMessage}</Styled.Stock>
      </Styled.Content>
    </Styled.Item>
  );
};

export default ProductItems;