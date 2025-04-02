import styled from "styled-components";

const Styled = {
  ProductContainer: styled.div`
    display: flex;
    padding: 2rem;
    margin: 1rem;
    background: #fff;
  `,

  Thumbnail: styled.img`
    border-radius: 10px;
    object-fit: contain;
  `,

  Title: styled.h2`
    font-size: 2rem;
    margin: 10px 0;
  `,

  Category: styled.p`
    font-size: 1rem;
    color: #666;
  `,

  Price: styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  .discounted{
  font-size: 1.8rem;
  margin-right: 10px;
  }

  .original {
    text-decoration: line-through;
    color: #999;
    margin-left: 0.5rem;
  }
  .discountedPer {
    margin-left: 10px;
      color: #28a745;
  }
`,
  Rating: styled.div`
  font-size:0.9rem;
  font-weight: 600;
    display: flex;
    gap: 1rem;
    color: gray;
  `,

  Stock: styled.p<{ stock: number }>`
    font-size: 1rem;
    color: ${({ stock }) => (stock >= 10 ? "#388e3c" : "#cc0c6b")};
    font-weight: 600;
  `,

  Description: styled.p`
    font-size: 1rem;
    color: #444;
    margin-top: 10px;
    font-weight: 500;
  `,

  ThumbnailContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  SmallThumbnail: styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    transition: border 0.3s ease, transform 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.05);
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  Reviews: styled.div`
    margin-top: 20px;

    > p:first-child {
      font-size: 1.5rem;
      font-weight: bold;
    }

    > p:last-child {
      color: grey;
    }
  `,

  ReviewCard: styled.div`
    background: #f9f9f9;
    padding: 1rem;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;

    >span{
      font-size: 0.8rem;
      color: gray;
      margin-top: 10px;
      margin-right: 1rem;
      font-weight: 600;
    }
  `,

  ReviewHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: bold;
  `,

  ReviewText: styled.p`
    font-size: 0.9rem;
    color: #333;
    margin: 10px auto;
  `,

  Grid: styled.div`
   display: grid;
    grid-template-columns: 20% 80%;
  gap: 1;
  margin-top: 1rem;
  `,

  GridItem: styled.div`

`
};

export default Styled;
