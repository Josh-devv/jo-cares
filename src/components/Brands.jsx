import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import ProdCaro from "@/components/ProductCaro";
import { brand, prod } from "./imgCaro";

import BrandCaro from "@/components/BrandCaro";

export default function Brands() {
    return(
      <div className="flex h-[20vh] pb-5 justify-center items-center w-full flex-col">
      <div className="w-11/12 pt-4 ">
      <Carousel
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      arrows={false}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      autoPlay={true}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 768,
          },
          items: 4,
        },
        mobile: {
          breakpoint: {
            max: 768,
            min: 480,
          },
          items: 3,
        },
        xsm: {
          breakpoint: {
            max: 480,
            min: 0,
          },
          items: 2,
        },
      }}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable={"true"}
    >
      {brand.map((product) => (
              <BrandCaro product={product} />
            ))}
    </Carousel>
          
        </div>
        </div>
    )
}