import React from "react";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  return (
    <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false}>
      <div className="relative">
        <img alt="" src="/images/slides/slide_1.png" />
      </div>
      <div className="relative">
        <img alt="" src="/images/slides/slide_1.png" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
