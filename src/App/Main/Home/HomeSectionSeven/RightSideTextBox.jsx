import RightSideBoxContents from "./RightSideBoxContents";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEarthAsia } from "react-icons/fa6";
import {
  HiArrowRightOnRectangle,
  HiArrowTrendingUp,
  HiClipboardDocument,
  HiEnvelope,
} from "react-icons/hi2";

function RightSideTextBox() {
  return (
    <div className="rightSideTextbox">
      <RightSideBoxContents num="1" type="discovery" style={{ color: "red" }}>
        <HiEnvelope />
      </RightSideBoxContents>
      <RightSideBoxContents num="2" type="maping">
        <HiClipboardDocument />
      </RightSideBoxContents>
      <RightSideBoxContents num="3" type="exploration">
        <FaEarthAsia />
      </RightSideBoxContents>
      <RightSideBoxContents num="4" type="strategy">
        <HiArrowTrendingUp />
      </RightSideBoxContents>
      <RightSideBoxContents num="5" type="execution">
        <HiArrowRightOnRectangle />
      </RightSideBoxContents>
    </div>
  );
}

export default RightSideTextBox;
