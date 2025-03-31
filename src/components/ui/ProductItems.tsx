import styled from 'styled-components';
import { Product } from '../../types/types';
import React from 'react';

interface IProductItemsProps {
  product: Product;
}

const ProductItems: React.FC<IProductItemsProps> = ({ product }) => {
  const { thumbnail, brand, price, category, rating, stock, title } = product;
  return (
    <StyledItem>
      <ImageContainer>
        <Image src={thumbnail} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Brand>{brand}</Brand>
        <Category>{category}</Category>
        <Price>
          <span className="discounted">${(price * 0.85).toFixed(2)}</span>
          <span className="original">${price}</span>
        </Price>
        <Rating>⭐ {rating} / 5</Rating>
        <Stock stock={stock}>{stock > 0 ? `left only ${stock}` : 'Out of Stock'}</Stock>
      </Content>
    </StyledItem>
  );
};

export default ProductItems;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 120px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const Brand = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const Price = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #28a745;

  .original {
    font-size: 0.9rem;
    text-decoration: line-through;
    color: #999;
    margin-left: 0.5rem;
  }
`;

const Rating = styled.p`
  font-size: 1rem;
  color: #ffa500;
`;

const Stock = styled.p<{ stock: number }>`
  font-size: 0.9rem;
  color: ${({ stock }) => (stock > 0 ? '#cc0c6b' : '#d9534f')};
  font-weight: bold;
`;
