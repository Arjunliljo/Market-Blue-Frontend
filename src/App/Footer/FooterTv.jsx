import { useEffect, useRef, useState } from "react";
import FeaturedVideo from "../Utility/FeaturedVideo";

function FooterTv({ isSmall }) {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    const updateVideoHeight = () => {
      if (imageRef.current) {
        const imgHeight = imageRef.current.clientHeight;
        setVideoHeight(imgHeight - 20);
      }
    };

    // Initial update
    updateVideoHeight();

    // Update on window resize
    window.addEventListener("resize", updateVideoHeight);
    return () => window.removeEventListener("resize", updateVideoHeight);
  }, []);

  const threshold = isSmall ? 0 : 20;

  return (
    <>
      <div className="ipadTv">
        <img ref={imageRef} src="./images/Ipad.svg" alt="small video" />
      </div>
      <div
        ref={videoRef}
        className="footer_video"
        style={{ height: `${videoHeight - threshold}px` }}
      >
        <FeaturedVideo path={"./Videos/FeaturedVideoOne.mov"} />
      </div>
    </>
  );
}

export default FooterTv;
