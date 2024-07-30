import styles from "./Thumbnail.module.css";
import useScrollParalax from "../../Hooks/scrollPralax";
import { useDispatch, useSelector } from "react-redux";
import { setIsVideoOn } from "../../../Global/Events/eventSlice";

function Thumbnail() {
  const [style] = useScrollParalax();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsVideoOn(true));
  };

  return (
    <div
      onClick={handleClick}
      className={styles.thumbnailContainer}
      style={style}
    ></div>
  );
}

export default Thumbnail;
