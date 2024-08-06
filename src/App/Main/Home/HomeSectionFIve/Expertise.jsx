import { useEffect, useRef, useState } from "react";
import fetchData from "../../../HelperFuntions/fetchData";
import Image from "../../../Utility/Image/Image";

function Expertise({ style, id }) {
  const data = fetchData(id);
  const [anim, setAnim] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entri) => {
          if (entri.isIntersecting) setAnim(true);
          else setAnim(false);
        });
      },
      {
        threshold: 0.3,
      }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <article ref={targetRef} className="expertise" style={style}>
      <div
        className="expertise__container"
        style={
          anim
            ? { transform: "translateY(0rem)", opacity: "1" }
            : { transform: "translateY(2rem)", opacity: "0" }
        }
      >
        <div className="imageContainer">
          <Image src={data.src} style={{ margin: "0 auto" }} />
        </div>
        <div className="expertise__captions-box">
          <span className="section-text">{data.expertise}</span>
          <h3 className="section-title-small">{data.title}</h3>
          <button className="learn-more">Learn More &rarr;</button>
        </div>
      </div>
    </article>
  );
}

export default Expertise;
