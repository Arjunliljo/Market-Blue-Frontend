import CanvasAnimation from "../../Utility/CanvasAnimation";
import { useAnim } from "../../Context/AnimationContext";

function HomeSectionOne() {
  const { homeAnimationDelay } = useAnim();
  console.log(homeAnimationDelay);
  return (
    <section className="homeSectionOne">
      <div className="homeSectionOne__container">
        {!homeAnimationDelay && <CanvasAnimation />}
      </div>
    </section>
  );
}

export default HomeSectionOne;
