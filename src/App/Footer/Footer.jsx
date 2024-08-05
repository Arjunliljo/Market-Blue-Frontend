import useObserver from "../Hooks/useObserver";
import { useRef } from "react";
import { setIsFooter } from "../../Global/Events/eventSlice";
import FooterTv from "./FooterTv";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

function Footer() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsFooter, 0.2);

  return (
    <footer ref={targetRef} className="footer">
      <FooterTv />
      <UpperFooter />
      <LowerFooter />
    </footer>
  );
}

export default Footer;
