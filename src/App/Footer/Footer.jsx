import useObserver from "../Hooks/useObserver";
import { useRef } from "react";
import { setIsFooter } from "../../Global/Events/eventSlice";
import FooterTv from "./FooterTv";
import UpperFooter from "./UpperFooter";
import SocialMediaBtns from "../Utility/SocialMediaBtns/SocialMediaBtns";

function Footer() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsFooter, 0.2);

  return (
    <footer ref={targetRef} className="footer">
      <FooterTv />
      <UpperFooter />
      <div className="lowerFooter">
        <div className="lowerFooter-content-box">
          <h3 className="section-text">Need to help? contact us</h3>
          <h4>userxxx@gmail.com</h4>
          <h4>adminxxx@gmail.com</h4>
          <h4>+91 XXXXXXXXXX</h4>

          <SocialMediaBtns />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
