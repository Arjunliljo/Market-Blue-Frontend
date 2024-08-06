import { Parallax } from "react-scroll-parallax";
import FooterBtn from "../Utility/FooterBtn/FooterBtn";

function UpperFooter({ isSmall }) {
  const speed = isSmall ? 0 : -8;

  return (
    <div className="upperFooter">
      <div className="upper-content-box">
        {isSmall ? (
          <Parallax speed={speed}>
            <h2 className="upper-content-box--heading">
              Move Your Business Next Level
            </h2>
            <div className="footer-btns">
              <FooterBtn type={"footerBtn"}>Download Brouchure</FooterBtn>
              <FooterBtn type={"footerRev"}>Enquire</FooterBtn>
            </div>
          </Parallax>
        ) : (
          <>
            <h2 className="upper-content-box--heading">
              Move Your Business Next Level
            </h2>
            <div className="footer-btns">
              <FooterBtn type={"footerBtn"}>Download Brouchure</FooterBtn>
              <FooterBtn type={"footerRev"}>Enquire</FooterBtn>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UpperFooter;
