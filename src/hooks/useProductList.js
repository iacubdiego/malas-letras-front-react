import { useState } from 'react';

const useProductList = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);

  return { products, setProducts };
};

export default useProductList;
