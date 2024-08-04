import RightSideBoxContents from "./RightSideBoxContents";

function RightSideTextBox() {
  return (
    <div className="rightSideTextbox">
      <RightSideBoxContents type="discovery" />
      <RightSideBoxContents type="maping" />
      <RightSideBoxContents type="exploration" />
      <RightSideBoxContents type="strategy" />
      <RightSideBoxContents type="execution" />
    </div>
  );
}

export default RightSideTextBox;
