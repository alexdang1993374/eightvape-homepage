import styled from "styled-components";
import Image from "next/image";

import { FadeInDiv, movingGradient } from "@/constants";
import { backgroundPrimary, sunsetBackground, textPrimary } from "@/lib/colors";
import Center from "./Center";
import { promoBanner } from "@/assets";

const Featured = () => {
  return (
    <BackgroundSt>
      <FadeInDiv style={{ marginTop: "1rem" }}>
        <Center>
          <StyledDiv>
            <Image
              src={promoBanner}
              alt="prime day banner"
              width={1000}
              height={300}
            />
          </StyledDiv>
        </Center>
      </FadeInDiv>
    </BackgroundSt>
  );
};

export default Featured;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackgroundSt = styled.div`
  background-image: ${sunsetBackground};
  background-size: 400% 400%;
  animation: ${movingGradient} 25s ease infinite;
  padding: 2rem 5rem 14rem 5rem;
  height: 21rem;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 42rem;
  }

  @media screen and (max-width: 515px) {
    height: 46rem;
  }
`;
