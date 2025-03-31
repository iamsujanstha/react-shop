import ProductItems from '@components/ui/ProductItems';
import { Product } from '../../types/types';
import { useEffect, useState } from 'react'
import { getAllProducts } from '@src/api/product.api';
import styled from 'styled-components';



const ProductList = () => {
  const [productList, setProuctList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProuctList(data.products);
    };
    fetchData();
  }, []);

  return (
    <Ul>{productList.map((item) => (
      <Li key={item.id}>
        <ProductItems product={item} />
      </Li>
    ))}
    </Ul>
  )
}

export default ProductList


const Ul = styled.ul`
 list-style-type: none;
`;

const Li = styled.li`
  margin-bottom: 1rem;
`