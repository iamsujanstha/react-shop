import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductItems from '@components/core/product-items/ProductItems';
import { getAllProducts } from '@src/api/product.api';
import { Product } from '../../types/types';
import Loader from '@components/ui/Loader';

const ProductList = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const lastElementRef = useRef<HTMLLIElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllProducts();
      setProductList(data.products);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!lastElementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(lastElementRef.current);
    return () => observer.disconnect();
  }, [productList.length, loading]);

  const loadMore = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const moreProducts = await getAllProducts();
    setProductList((prev) => [...prev, ...moreProducts.products]);
    setLoading(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const listItem = target.closest('li');
    if (listItem && listItem.dataset.id) {
      navigate(`/product/${listItem.dataset.id}`);
    }
  };

  return (
    /* Need to use React Window to avoid max rendered list items in DOM */
    <>
      <Ul onClick={handleClick}>
        {productList.map((item, index) => (
          <Li
            key={item.id}
            data-id={item.id}
            ref={index === productList.length - 1 ? lastElementRef : null}
          >
            <ProductItems product={item} />
          </Li>
        ))}
      </Ul>
      {loading && <LoaderContainer><Loader /></LoaderContainer>}
    </>
  );
};

export default ProductList;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  margin-bottom: 1rem;
`;

const LoaderContainer = styled.div`
  text-align: center;
`