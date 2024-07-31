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
    <div classNameName="logo-slider">
      <div className="logo-slider">
        <div className="logos-slide">
          <img src="https://i.ibb.co/Vv5rkDK/api-partner-verzon.png" />
          <img src="https://i.ibb.co/J399KDg/api-partner-netflix.png" />
          <img src="https://i.ibb.co/TKT0F5L/api-partner-yelp.png" />
          <img src="https://i.ibb.co/HG6KR89/api-partner-adobe.png" />
          <img src="https://i.ibb.co/hMSJ1sg/api-partner-ring.png" />
          <img src="https://i.ibb.co/4RWQcMS/api-partner-nespresso.png" />
        </div>
        <div className="logos-slide">
          <img src="https://i.ibb.co/Vv5rkDK/api-partner-verzon.png" />
          <img src="https://i.ibb.co/J399KDg/api-partner-netflix.png" />
          <img src="https://i.ibb.co/TKT0F5L/api-partner-yelp.png" />
          <img src="https://i.ibb.co/HG6KR89/api-partner-adobe.png" />
          <img src="https://i.ibb.co/hMSJ1sg/api-partner-ring.png" />
          <img src="https://i.ibb.co/4RWQcMS/api-partner-nespresso.png" />
        </div>
        <div className="logos-slide">
          <img src="https://i.ibb.co/Vv5rkDK/api-partner-verzon.png" />
          <img src="https://i.ibb.co/J399KDg/api-partner-netflix.png" />
          <img src="https://i.ibb.co/TKT0F5L/api-partner-yelp.png" />
          <img src="https://i.ibb.co/HG6KR89/api-partner-adobe.png" />
          <img src="https://i.ibb.co/hMSJ1sg/api-partner-ring.png" />
          <img src="https://i.ibb.co/4RWQcMS/api-partner-nespresso.png" />
        </div>
      </div>
    </div>
  );
}
export default SlidingLogos;
