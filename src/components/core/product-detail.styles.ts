import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  text-align: center;
`;

export const Category = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
`;

export const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
`;

interface StockProps {
  inStock: boolean;
}

export const Stock = styled.p<StockProps>`
  font-size: 1rem;
  color: ${props => (props.inStock ? "#2ecc71" : "#e74c3c")};
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
  margin-top: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

export const SmallThumbnail = styled.img`
  /* Styles will be applied inline in the component for now */
`;