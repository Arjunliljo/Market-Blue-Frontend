import { useDispatch, useSelector } from "react-redux";
import { setIsVideoOn } from "../../../Global/Events/eventSlice";

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
          ? { animation: "playerAnimOn 1s ease forwards" }
          : {
              animation: "playerAnimOff .5s ease forwards",
            }
      }
    >
      <button onClick={handleClick}>Back</button>
      <div>VideoPlayer</div>
    </div>
  );
}

export default VideoPlayer;
