import React, { useEffect } from "react";

function SlidingLogos() {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logo-slider").appendChild(copy);
    }
  }, []);

  return (
    <div className="logo-slider">
      <div className="logos-slide">
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
        <img src="./images/logo.svg" />
      </div>
    </div>
  );
}
export default SlidingLogos;
