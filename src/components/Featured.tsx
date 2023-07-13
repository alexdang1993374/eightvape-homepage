import styled from "styled-components";

import { FadeInDiv, movingGradient } from "@/constants";
import { sunsetBackground } from "@/lib/colors";
import Center from "./Center";
import ImageCarousel from "./ImageCarousel";

const Featured = () => {
  return (
    <BackgroundSt>
      <FadeInDiv style={{ marginTop: "1rem" }}>
        <Center>
          <ImageCarousel />
        </Center>
      </FadeInDiv>
    </BackgroundSt>
  );
};

export default Featured;

const BackgroundSt = styled.div`
  background-image: ${sunsetBackground};
  background-size: 400% 400%;
  animation: ${movingGradient} 25s ease infinite;
  padding: 2rem 0rem 14rem 0rem;
  height: 21rem;
  width: 100%;

  @media screen and (max-width: 830px) {
    height: 15rem;
  }

  @media screen and (max-width: 620px) {
    height: 7rem;
  }

  @media screen and (max-width: 460px) {
    height: 1rem;
  }
`;
