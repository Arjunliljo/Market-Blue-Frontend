import { useEffect, useState } from "react";
import Image from "../Utility/Image/Image";

function FeaturedVideo({ path, style }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelay(false);
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, []);

  const handleLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <div className="videoContainer" style={style}>
      <video
        preload="auto"
        src={path}
        autoPlay={true}
        muted
        loop
        onLoadedData={handleLoad}
        style={delay ? { opacity: 0 } : {}}
      >
        Your browser does not support the video tag.
      </video>

      <div className="videoContainer__placeholder"></div>
      {(!videoLoaded || delay) && (
        <Image
          src="Videos/featutedVideoThumbnail.svg"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      )}
    </div>
  );
}

export default FeaturedVideo;
