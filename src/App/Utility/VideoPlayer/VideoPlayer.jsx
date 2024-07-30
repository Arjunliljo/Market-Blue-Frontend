import { useDispatch, useSelector } from "react-redux";
import { setIsVideoOn } from "../../../Global/Events/eventSlice";
import BackBtn from "./BackButton/BackBtn";
import FeaturedVideo from "../FeaturedVideo";

function VideoPlayer() {
  const { isVideoOn } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsVideoOn(false));
  };

  return (
    <div
      id="player"
      className="playerContainer"
      style={
        isVideoOn
          ? { animation: "playerAnimOn .8s ease forwards" }
          : {
              animation: "playerAnimOff .5s ease forwards",
            }
      }
    >
      <div className="playerBtnContainer" onClick={handleClick}>
        <BackBtn />
      </div>

      {isVideoOn && (
        <div className="player_video-box">
          <FeaturedVideo path="/Videos/FeaturedVideoOne.mov" />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
