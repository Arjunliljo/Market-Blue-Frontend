import { useRef, useState } from "react";
import FeaturedVideo from "../../../Utility/FeaturedVideo";
import Slider from "../../../Utility/Slider/Slider";
import oneTImeObserver from "../../../Hooks/oneTImeObserver";
import useObserver from "../../../Hooks/useObserver";

function HomeSectionTwo() {
  const targetRef = useRef(null);
  const [oneTimeObeserver, setOneTimeOberver] = useState(false);

  oneTImeObserver(targetRef, setOneTimeOberver);
  useObserver(targetRef);

  return (
    <section ref={targetRef} className="homeSectionTwo">
      {oneTimeObeserver && (
        <Slider items={1} childWidth={`${1200}px`} gap="0px">
          <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
        </Slider>
      )}
    </section>
  );
}

export default HomeSectionTwo;
