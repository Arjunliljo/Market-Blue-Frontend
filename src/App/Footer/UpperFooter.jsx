import { Parallax } from "react-scroll-parallax";
import FooterBtn from "../Utility/FooterBtn/FooterBtn";

function UpperFooter() {
  return (
    <div className="upperFooter">
      <div className="upper-content-box">
        <Parallax speed={-6}>
          <h2 className="upper-content-box--heading">
            Move Your Business Next Level
          </h2>
          <div className="footer-btns">
            <FooterBtn type={"footerBtn"}>Download Brouchure</FooterBtn>
            <FooterBtn type={"footerRev"}>Enquire</FooterBtn>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default UpperFooter;
