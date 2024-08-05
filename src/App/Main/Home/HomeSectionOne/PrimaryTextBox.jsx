import HomeBtn from "../../../Utility/HomeBtn";

function PrimaryTextBox({ style }) {
  return (
    <div className="primary-text-box" style={style}>
      <h1>
        We Create <br />
        <span>Execptional</span> Digital <br /> Experiance
      </h1>
      <div className="homeBtnContainer">
        <HomeBtn>button</HomeBtn>
      </div>
    </div>
  );
}

export default PrimaryTextBox;
