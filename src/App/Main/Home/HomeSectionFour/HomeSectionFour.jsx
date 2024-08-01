import { useRef } from "react";

import useObserver from "../../../Hooks/useObserver";
import { setIsSectionFour } from "../../../../Global/Events/eventSlice";

import AboutText from "./AboutText";
import AboutImages from "./AboutImages";

function HomeSectionFour() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionFour, 0.5);

  return (
    <section ref={targetRef} className="homeSectionFour">
      <div className="container">
        <AboutText />
        <AboutImages />
      </div>
    </section>
  );
}

export default HomeSectionFour;
