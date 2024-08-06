import { useRef } from "react";
import LeftSideTextBox from "./LeftSideTextBox";
import RightSideTextBox from "./RightSideTextBox";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionSeven } from "../../../../Global/Events/eventSlice";
import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";

function HomeSectionSeven() {
  const targetRef = useRef(null);

  useObserver(targetRef, setIsSectionSeven, 0.1);

  const { isPhone, isSmallPhone } = useSelector((state) => state.breakPoints);

  const isParallax = isPhone || isSmallPhone;

  return isParallax ? (
    <section ref={targetRef} className="homeSectionSeven">
      <Parallax speed={10}>
        <div className="container">
          <div className="content-box">
            <LeftSideTextBox />
            <RightSideTextBox />
          </div>
        </div>
      </Parallax>
    </section>
  ) : (
    <section ref={targetRef} className="homeSectionSeven">
      <div className="container">
        <div className="content-box">
          <LeftSideTextBox />
          <RightSideTextBox />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionSeven;
