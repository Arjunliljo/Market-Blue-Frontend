import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from "react";

function RightSideBoxContents({ children, type, num }) {
  let heading, text;

  const targetRef = useRef(null);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entri) => {
          if (entri.isIntersecting) setAnim(true);
          else setAnim(false);
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.9,
      }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  switch (type) {
    case "maping":
      heading = "Mapping";
      text = "Our mapping process is guaranteed";
      break;
    case "discovery":
      heading = "Disovery";
      text = "No two businesses are the same";
      break;
    case "exploration":
      heading = "Exploration";
      text = "We explore and document all";
      break;
    case "strategy":
      heading = "Strategy";
      text = "No two businesses are the same";
      break;
    case "execution":
      heading = "Execution";
      text = "No two businesses are the same";
      break;

    default:
      throw new Error("Undefined type..");
  }

  return (
    <article
      ref={targetRef}
      className="boxContents"
      style={anim ? { transform: "scaleY(1)" } : { transform: "scaleY(0)" }}
    >
      <div className="boxContents__content-box">
        <IconContext.Provider value={{ className: "reac-icons" }}>
          <div className="icon__container">{children}</div>
          <h3>
            {num}. {heading}
          </h3>
          <span>{text}</span>
        </IconContext.Provider>
      </div>
    </article>
  );
}

export default RightSideBoxContents;
