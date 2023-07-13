import { buttonColor } from "@/lib/colors";
import styled from "styled-components";
import Button from "./Button";
import ProductsGrid from "./ProductsGrid";

const NewArrivals = () => {
  return (
    <ContainerSt>
      <TitleSt>New Arrivals</TitleSt>

      <ProductsGrid />

      <AllProductsSt>
        <Button
          bgColor={buttonColor}
          textColor={buttonColor}
          hasoutline="true"
          text="See All Products"
        />
      </AllProductsSt>
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

const AllProductsSt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
