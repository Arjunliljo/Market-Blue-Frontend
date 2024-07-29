import CanvasAnimation from "../../../Utility/CanvasAnimation";
import { useAnim } from "../../../Context/AnimationContext";
import StarBackgroundAnim from "../../../Utility/StarBackgroundAnim";

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

        <StarBackgroundAnim />
        <div className="container">
          <div className="primary-text-box">
            <h1 style={initialMount ? { animation: "none" } : {}}>
              We Create <br />
              <span>Execptional</span> Digital <br /> Experiance
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionOne;
