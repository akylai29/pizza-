import Slider from "react-slick"
import SliderCard from "../../components/sliderCard/SliderCard";
import SliderMap from "../../components/sliderCard/SliderMap";

function HomePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    // arrow:true,
  };

  return (
    <div className="GeneralWidth">
      <Slider {...settings}>
        <SliderMap />
        {/* <SliderMap />
        <SliderMap />
        <SliderMap />
        <SliderMap />
        <SliderMap />
        <SliderMap />
        <SliderMap />
        <SliderMap /> */}
      </Slider>

    </div>
  )
}

export default HomePage