import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionSix } from "../../../../Global/Events/eventSlice";
import Image from "../../../Utility/Image/Image";
import TechSlider from "./TechSlider";

function HomeSectionSix() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionSix, 0.5);

  return (
    <Parallax speed={-10}>
      <section className="homeSectionSix" ref={targetRef}>
        <Parallax speed={10}>
          <div className="sectionSix-text">
            <span className="homeSectionSix-span">Tech We Work With</span>
            <h2>Seamless technologies we are working with</h2>
          </div>
        </Parallax>
        <div className="globecontainer">
          <div className="logoContainer">
            <Image src="./images/TemplateLogo.svg" />
          </div>
        </div>
        <div className="sliderContainer">
          <TechSlider />
          <TechSlider reverse={true} />
        </div>
      </section>
    </Parallax>
  );
}

export default HomeSectionSix;
