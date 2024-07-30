import { useState } from "react";

function FeaturedVideo({ path, style }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
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
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default FeaturedVideo;
