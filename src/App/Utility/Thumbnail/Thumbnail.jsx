import useScrollParalax from "../../Hooks/scrollPralax";
import { useDispatch } from "react-redux";
import {
  setIsClickedThumbnail,
  setIsVideoOn,
} from "../../../Global/Events/eventSlice";

function Thumbnail() {
  const [style] = useScrollParalax();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsVideoOn(true));
    dispatch(setIsClickedThumbnail(true));
  };

  return (
    <div
      onClick={handleClick}
      className="thumbnailContainer"
      style={style}
    ></div>
  );
}

export default Thumbnail;
