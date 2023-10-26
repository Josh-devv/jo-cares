import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
const ProdCaro = ({ children }) => {
  return (
    
    <Carousel
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      arrows={false}
      centerMode={false}
      className="h-screen mx-auto p-0"
      containerClass=""
      dotListClass=""
      draggable
      autoPlay
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
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
      }}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
};

export default ProdCaro;
