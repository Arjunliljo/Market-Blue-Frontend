import CanvasAnimation from "../../../Utility/CanvasAnimation";
import { useAnim } from "../../../Context/AnimationContext";

function HomeSectionOne() {
  const { homeAnimationDelay, initialMount } = useAnim();
  return (
    <section className="homeSectionOne">
      <div
        className="homeSectionOne__container"
        // once animated then we don't want this navigation while routing
        style={initialMount ? { animation: "none" } : {}}
      >
        {/* This is only for get rid of canvas bug  */}
        {!homeAnimationDelay && <CanvasAnimation />}
      </div>
    </section>
  );
}

export default HomeSectionOne;
