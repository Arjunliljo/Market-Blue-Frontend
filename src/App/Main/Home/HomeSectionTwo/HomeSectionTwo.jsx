import { useEffect, useRef, useState } from "react";
import FeaturedVideo from "../../../Utility/FeaturedVideo";
import Slider from "../../../Utility/Slider/Slider";

const viewWidth = window.innerWidth;

function HomeSectionTwo() {
  const targetRef = useRef(null);
  const [isObserving, setIsObserving] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setIsObserving(true);
        }
      },
      { threshold: 0.2 }
    );

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section ref={targetRef} className="homeSectionTwo">
      {isObserving && (
        <Slider items={1} childWidth={`${1200}px`} gap="0px">
          <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
        </Slider>
      )}
    </section>
  );
}

export default HomeSectionTwo;
