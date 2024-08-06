import useObserver from "../Hooks/useObserver";
import { useRef } from "react";
import { setIsFooter } from "../../Global/Events/eventSlice";
import FooterTv from "./FooterTv";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";
import { useSelector } from "react-redux";

function Footer() {
  const targetRef = useRef(null);
  useObserver(targetRef, setIsFooter, 0.2);

  const { isPhone, isSmallPhone } = useSelector((state) => state.breakPoints);

  const isSmall = isPhone || isSmallPhone;

  return (
    <footer ref={targetRef} className="footer">
      <FooterTv isSmall={isSmall} />
      <UpperFooter isSmall={isSmall} />
      <LowerFooter isSmall={isSmall} />
    </footer>
  );
}

export default Footer;
