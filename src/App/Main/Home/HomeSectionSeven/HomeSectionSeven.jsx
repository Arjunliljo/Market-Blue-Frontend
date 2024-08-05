import { useRef } from "react";
import LeftSideTextBox from "./LeftSideTextBox";
import RightSideTextBox from "./RightSideTextBox";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionSeven } from "../../../../Global/Events/eventSlice";

function HomeSectionSeven() {
  const targetRef = useRef(null);

  useObserver(targetRef, setIsSectionSeven, 0);

  return (
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
