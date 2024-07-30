import CanvasAnimation from "../../../Utility/CanvasAnimation";
import { useAnim } from "../../../Context/AnimationContext";
import StarBackgroundAnim from "../../../Utility/StarBackgroundAnim";
import PrimaryTextBox from "./PrimaryTextBox";
import Thumbnail from "../../../Utility/Thumbnail/Thumbnail";
import { useSelector } from "react-redux";

function HomeSectionOne() {
  // const { homeAnimationDelay, initialMount } = useAnim();
  const initialMount = useSelector((state) => state.timing.initialMount);
  return (
    <section className="homeSectionOne">
      <div
        className="homeSectionOne__container"
        // once animated then we don't want this navigation while routing
        style={initialMount ? { animation: "none" } : {}}
      >
        {/* This is only for get rid of canvas bug  */}
        {initialMount && <CanvasAnimation />}

        <StarBackgroundAnim style={{ height: "200%" }} />
        <div className="container">
          <PrimaryTextBox style={initialMount ? { animation: "none" } : {}} />

          <Thumbnail />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionOne;
