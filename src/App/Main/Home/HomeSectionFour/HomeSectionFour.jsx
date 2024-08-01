import { useRef } from "react";

import useObserver from "../../../Hooks/useObserver";
import { setIsSectionFour } from "../../../../Global/Events/eventSlice";

import AboutText from "./AboutText";

function HomeSectionFour() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionFour, 0.5);

  return (
    <section ref={targetRef} className="homeSectionFour">
      <div className="container">
        <AboutText />
      </div>
    </section>
  );
}

export default HomeSectionFour;
