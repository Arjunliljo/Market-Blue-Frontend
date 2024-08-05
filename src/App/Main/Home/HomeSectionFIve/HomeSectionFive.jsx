import { Parallax } from "react-scroll-parallax";
import Expertise from "./Expertise";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionFive } from "../../../../Global/Events/eventSlice";

function HomeSectionFive() {
  const arr = [];
  const expertiseLength = 8;
  const height = 70;
  for (let i = 0, j = 0; i < expertiseLength; i++) {
    if (i % 2 === 0) {
      arr.push({ right: "0", top: `${j * height}rem`, height: `${height}rem` });
    } else {
      arr.push({
        left: "0",
        top: `${j * height + 20}rem`,
        height: `${height}rem`,
      });
      j++;
    }
  }

  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionFive, 0.1);

  const { isSectionSix } = useSelector((state) => state.events);

  return (
    <section
      ref={targetRef}
      className="homeSectionFive"
      style={isSectionSix ? { backgroundColor: "#202020" } : {}}
    >
      <Parallax speed={20}>
        <div className="container">
          <span className="section-about-title">Experts in</span>
          <h2 className="section-title">Crafting Concepts</h2>

          {arr.map((style, i) => (
            <Expertise style={style} key={i} id={i} />
          ))}
        </div>
      </Parallax>
    </section>
  );
}

export default HomeSectionFive;
