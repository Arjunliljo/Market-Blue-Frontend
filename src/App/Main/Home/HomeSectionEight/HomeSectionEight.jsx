import { useEffect, useRef } from "react";
import "./sectioneight.css";
import { useSelector } from "react-redux";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionEight } from "../../../../Global/Events/eventSlice";
import { Parallax } from "react-scroll-parallax";

function HomeSectionEight() {
  const targetRef = useRef(null);
  const { isSectionEight } = useSelector((state) => state.events);
  const text = "Magic loop";

  useObserver(targetRef, setIsSectionEight, 0.2);

  return (
    <section ref={targetRef} className="homeSectionEight heading-section">
      <div className="container">
        <h1 id="parallax-heading">
          {text.split("").map((char, index) => {
            const content = <span key={index}>{char}</span>;

            return isSectionEight ? (
              content // Render normally when isSectionEight is true
            ) : (
              <Parallax key={index} speed={index % 2 === 0 ? -10 : 10}>
                {content}
              </Parallax>
            );
          })}
        </h1>
      </div>
    </section>
  );
}

export default HomeSectionEight;
