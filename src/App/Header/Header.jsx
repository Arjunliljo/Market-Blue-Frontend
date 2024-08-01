import { useSelector } from "react-redux";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

function Header() {
  const { isSectionOne, isSectionTwo, isSectionSix } = useSelector(
    (state) => state.events
  );

  const fixed = !isSectionOne && !isSectionTwo;

  const fixedStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    backgroundColor: isSectionSix ? "#202020" : "white",
    color: isSectionSix ? "rgb(197, 197, 197)" : "black",
    animation: "headerFixedAnim .5s ease forwards",
  };

  return (
    <header
      className="header"
      style={fixed ? fixedStyle : { position: "absolute" }}
    >
      <div className="container">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
