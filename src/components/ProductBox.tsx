import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import styled from "styled-components";

import { BestSeller } from "@/constants";
import { backgroundPrimary } from "@/lib/colors";
import { IProduct } from "@/types";

interface IProductBox {
  product: IProduct;
}

const ProductBox = ({ product }: IProductBox) => {
  return (
    <>
      <ProductWrapperSt>
        <ImageContainer>
          {product.properties.Popular === "true" && (
            <BestSeller fontSize="1rem">Best Seller</BestSeller>
          )}

          <Image
            src={product.image}
            alt="product image"
            width={227.5}
            height={227.5}
          />

          <OverlayText>see details</OverlayText>
        </ImageContainer>

        <ProductInfoSt>
          <TitleSt>
            <Balancer>{product.title}</Balancer>
          </TitleSt>

          <PriceRowSt>
            <PriceSt>{product.price}</PriceSt>
          </PriceRowSt>
        </ProductInfoSt>
      </ProductWrapperSt>
    </>
  );
};

export default ProductBox;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 767px) {
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${backgroundPrimary};
  font-weight: bold;
  font-size: 1.9rem;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s;

  @media screen and (min-width: 767px) {
    ${ImageContainer}:hover & {
      opacity: 1;
    }
  }
`;

const ProductWrapperSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleSt = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  color: inherit;

  @media screen and (max-width: 912px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 462px) {
    font-size: 1.5rem;
  }
`;

const ProductInfoSt = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const PriceRowSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriceSt = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
`;
