import Slider from 'react-slick';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
  export default Carousel;