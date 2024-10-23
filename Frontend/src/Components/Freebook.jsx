import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

const Freebook = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = list.filter((item) => item.category === "free"); // Filter from imported list.json

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semi-bold text-xl pb-2 ">Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores necessitatibus voluptate vitae aspernatur aperiam autem eum delectus exercitationem alias beatae, architecto eveniet placeat perspiciatis.</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

// PropTypes validation
Freebook.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number, // Added price validation
    })
  ).isRequired,
};

export default Freebook;
