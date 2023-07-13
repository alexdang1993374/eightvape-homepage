import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { hero, mamasan, promoBanner } from "@/assets";
import styled from "styled-components";

const images: StaticImageData[] = [promoBanner, hero, mamasan];

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image
            src={image}
            alt={`Carousel ${index}`}
            width={1000}
            height={300}
          />
        </ImageContainer>
      ))}
    </Carousel>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageCarousel;
