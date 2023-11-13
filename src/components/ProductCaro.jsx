import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const ProdCaro = ({ children }) => {
  return (
    
    <Carousel
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      arrows={false}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      autoPlay={false}
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
      {children}
    </Carousel>
  );
};

export default ProdCaro;
