import { Product, ProductsResponse } from '../types/types';

const BASE_URL = 'https://dummyjson.com/products';

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Something went wrong while fetching data.');
  }
};

export const getAllProducts = (): Promise<ProductsResponse> => {
  return fetchData<ProductsResponse>(BASE_URL);
};

export const getProductById = (id: number): Promise<Product> => {
  return fetchData<Product>(`${BASE_URL}/${id}`);
};
