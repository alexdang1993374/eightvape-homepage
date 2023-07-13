import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { hero, mamasan, promoBanner } from "@/assets";

const images: StaticImageData[] = [promoBanner, hero, mamasan];

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Carousel ${index}`}
            width={1000}
            height={300}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
