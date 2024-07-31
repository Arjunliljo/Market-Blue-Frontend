import ParallaxContent from "./ParallaxContent";
import SlidingLogos from "./SlidingLogos";

function HomeSectionThree() {
  const bgcl = "yellow";
  return (
    <section className="homeSectionThree">
      <div className="homeSectionThree__container">
        <div className="parallax">
          <ParallaxContent />
        </div>

        <div className="logo-box">
          <div className="container">
            <SlidingLogos bgcl="red" />
            <SlidingLogos bgcl="yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionThree;
