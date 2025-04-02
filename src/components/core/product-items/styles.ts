import styled from "styled-components";

export const Styled = {
  Item: styled.div`
    display: flex;
    align-items: center;
    gap: 1 rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    flex-direction: row;
    
    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  `,

  ImageContainer: styled.div`
    flex: 0 0 120px;
    
    @media (max-width: 768px) {
      flex: 0 0 auto;
      width: 100%;
      max-width: 200px;
    }
  `,

  Image: styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      align-items: center;
    }
  `,

  Title: styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  `,

  Brand: styled.p`
    font-size: 1rem;
    color: #666;
  `,

  Category: styled.p`
    font-size: 0.9rem;
    color: #888;
  `,

  Price: styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    color: #28a745;

    .original {
      font-size: 0.9rem;
      text-decoration: line-through;
      color: #999;
      margin-left: 0.5rem;
    }
    .discountedPer {
      margin-left: 10px;
    }
  `,

  Rating: styled.p`
    font-size: 1rem;
    color: #ffa500;
  `,

  Stock: styled.p<{ stock: number }>`
    font-size: 0.9rem;
    color: ${({ stock }) => stock >= 10 ? '#388e3c' : '#cc0c6b'};
    font-weight: bold;
  `
}
