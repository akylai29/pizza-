import Slider from "react-slick"
import SliderCard from "../../components/sliderCard/SliderCard";
import SliderMap from "../../components/sliderCard/SliderMap";
import './homePage.css'

function HomePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // arrow:true,
  };

  return (
    <div className="GeneralWidth">
      <Slider  {...settings}>
        <SliderMap/>
        <SliderMap/>
        <SliderMap/>
        <SliderMap/>
        <SliderMap/>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
      </Slider>
    </div>
  )
}

export default HomePage