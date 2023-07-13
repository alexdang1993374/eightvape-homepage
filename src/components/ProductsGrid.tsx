import styled from "styled-components";

import { products } from "@/constants/products";
import ProductBox from "./ProductBox";

const ProductsGrid = () => {
  return (
    <ProductsGridSt>
      {products.map((product, index) => (
        <ProductBox key={product._id + index} product={product} />
      ))}
    </ProductsGridSt>
  );
};

export default ProductsGrid;

const ProductsGridSt = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`;
