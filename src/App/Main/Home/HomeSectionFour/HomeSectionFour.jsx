import { useRef } from "react";

import useObserver from "../../../Hooks/useObserver";
import { setIsSectionFour } from "../../../../Global/Events/eventSlice";

import AboutText from "./AboutText";
import AboutImages from "./AboutImages";

function HomeSectionFour() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsSectionFour, 0.9);

  return (
    <section ref={targetRef} className="homeSectionFour">
      <div className="container">
        <AboutText t2="Thinkers. Doers. Agents of change. A full-service digital marketing agency with passion for ingenuity and innovation in every medium, focused on the user experience." />

        <AboutImages />
      </div>
    </section>
  );
}

export default HomeSectionFour;
