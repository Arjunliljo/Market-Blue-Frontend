import FeaturedVideo from "../../../Utility/FeaturedVideo";
import Slider from "../../../Utility/Slider/Slider";

const viewWidth = window.innerWidth;

function HomeSectionTwo() {
  return (
    <section className="homeSectionTwo">
      <Slider items={1} childWidth={`${viewWidth}px`} gap="0px">
        <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
        <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
      </Slider>
    </section>
  );
}

export default HomeSectionTwo;
