import { useRef, useState } from "react";
import FeaturedVideo from "../../../Utility/FeaturedVideo";
import Slider from "../../../Utility/Slider/Slider";
import oneTImeObserver from "../../../Hooks/oneTImeObserver";
import useObserver from "../../../Hooks/useObserver";
import { setIsSectionTwo } from "../../../../Global/Events/eventSlice";
import { useSelector } from "react-redux";

function HomeSectionTwo() {
  const targetRef = useRef(null);
  const [oneTimeObeserver, setOneTimeOberver] = useState(false);

  const { curWidth } = useSelector((state) => state.breakPoints);

  const calcAvg = (curWidth, percent) => {
    const percentValue = (percent / 100) * curWidth;
    const avg = (curWidth + percentValue) / 2;
    return Math.min(avg, 1200);
  };

  oneTImeObserver(targetRef, setOneTimeOberver);
  useObserver(targetRef, setIsSectionTwo);

  return (
    <section ref={targetRef} className="homeSectionTwo">
      <Slider
        items={1}
        childWidth={`${calcAvg(curWidth, 80)}px`}
        gap="0px"
        isRender={oneTimeObeserver}
      >
        <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
      </Slider>
    </section>
  );
}

export default HomeSectionTwo;
