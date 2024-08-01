import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionSix } from "../../../../Global/Events/eventSlice";
import Image from "../../../Utility/Image/Image";

function HomeSectionSix() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionSix, 0.5);

  return (
    <Parallax speed={-10}>
      <section className="homeSectionSix" ref={targetRef}>
        <Parallax speed={10}>
          <span className="homeSectionSix-span">Tech We Work With</span>
          <h2>Seamless technologies we are working with</h2>
        </Parallax>
        <div className="globecontainer">
          <div className="logoContainer">
            <Image src="./images/TemplateLogo.svg" />
          </div>
        </div>
      </section>
      ;
    </Parallax>
  );
}

export default HomeSectionSix;
