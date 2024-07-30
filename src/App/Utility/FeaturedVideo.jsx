import { useEffect, useState } from "react";
import Image from "../Utility/Image/Image";

function FeaturedVideo({ path, style }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [delay, setDelay] = useState(true);

  const placeholder = !videoLoaded || delay;

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelay(false);
    }, 3000);

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

      <div
        className="placeholder"
        style={placeholder ? { opacity: 1 } : { opacity: 0 }}
      ></div>
    </div>
  );
}

export default FeaturedVideo;
