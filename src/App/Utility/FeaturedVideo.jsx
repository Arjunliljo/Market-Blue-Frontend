function FeaturedVideo({ path, style, autoPlay }) {
  return (
    <div className="videoContainer" style={style}>
      <video src={path} autoPlay={true} muted loop>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default FeaturedVideo;
