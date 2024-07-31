import { Parallax } from "react-scroll-parallax";
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
        <Parallax speed={10}>
          <div className="parallax">
            <ParallaxContent />
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default HomeSectionThree;
