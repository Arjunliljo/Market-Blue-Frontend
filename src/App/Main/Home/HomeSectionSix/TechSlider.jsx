function TechSlider({ reverse = false }) {
  const style = {
    animation: `${reverse ? "scrollRev" : "scroll"} 8s linear infinite
  `,
  };

  return (
    <div className="slider">
      <div className={`${reverse ? "reverse-track" : "slide-track"}`}>
        <div className="tech-slide">1</div>
        <div className="tech-slide">2</div>
        <div className="tech-slide">3</div>
        <div className="tech-slide">4</div>
        <div className="tech-slide">5</div>
        <div className="tech-slide">6</div>
        <div className="tech-slide">7</div>
        <div className="tech-slide">8</div>
        <div className="tech-slide">9</div>
        <div className="tech-slide">0</div>
        {/* <!-- same 9 slides doubled (duplicate) --> */}
        <div className="tech-slide">1</div>
        <div className="tech-slide">2</div>
        <div className="tech-slide">3</div>
        <div className="tech-slide">4</div>
        <div className="tech-slide">5</div>
        <div className="tech-slide">6</div>
        <div className="tech-slide">7</div>
        <div className="tech-slide">8</div>
        <div className="tech-slide">9</div>
        <div className="tech-slide">0</div>
      </div>
    </div>
  );
}

export default TechSlider;
