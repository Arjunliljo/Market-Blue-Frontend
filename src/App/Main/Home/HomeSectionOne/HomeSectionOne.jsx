import CanvasAnimation from "../../../Utility/CanvasAnimation";

import StarBackgroundAnim from "../../../Utility/StarBackgroundAnim";
import PrimaryTextBox from "./PrimaryTextBox";
import Thumbnail from "../../../Utility/Thumbnail/Thumbnail";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionOne } from "../../../../Global/Events/eventSlice";
import { useAnim } from "../../../Context/AnimationContext";
import { useResize } from "../../../Context/ResizingContext";

function HomeSectionOne() {
  // const { homeAnimationDelay, initialMount } = useAnim();
  const initialMount = useSelector((state) => state.timing.initialMount);
  const { isDesktop } = useSelector((state) => state.breakPoints);

  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionOne);

  return (
    <section ref={targetRef} className="homeSectionOne">
      <div
        className="homeSectionOne__container"
        // once animated then we don't want this navigation while routing
        style={initialMount ? { animation: "none" } : {}}
      >
        {isDesktop && initialMount && <CanvasAnimation />}
        <StarBackgroundAnim style={isDesktop ? { height: "200%" } : {}} />

        <div className="logo-head">
          <img src="./MarketLub.png" alt="" />
        </div>
        <div className="content">
          <img src="./content.png" alt="" />
        </div>

        <a className="sayHi" href="https://wa.me/916282194930" target="_blank">
          Say Hi
        </a>

        <div className="container">
          {/* <PrimaryTextBox style={initialMount ? { animation: "none" } : {}} /> */}

          {/* <Thumbnail /> */}
        </div>
      </div>
    </section>
  );
}

export default HomeSectionOne;
