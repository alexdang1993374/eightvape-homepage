import styled from "styled-components";
import ProductsGrid from "./ProductsGrid";

const NewArrivals = () => {
  return (
    <ContainerSt>
      <TitleSt>New Arrivals</TitleSt>

      <ProductsGrid />
    </ContainerSt>
  );
};

export default NewArrivals;

const ContainerSt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 4rem;
  margin-top: 3rem;
`;

const TitleSt = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 2rem 0;
  font-weight: normal;
`;
