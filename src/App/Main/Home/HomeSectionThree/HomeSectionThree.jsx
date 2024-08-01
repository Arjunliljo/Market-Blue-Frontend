import ParallaxContent from "./ParallaxContent";
import SlidingLogos from "./SlidingLogos";

function HomeSectionThree() {
  return (
    <section className="homeSectionThree">
      <div className="homeSectionThree__container">
        <div className="container">
          <div className="logo-swiper">
            <SlidingLogos />
          </div>
        </div>
        <div className="parallax">
          <ParallaxContent />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionThree;
