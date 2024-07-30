import { useSelector } from "react-redux";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

function Header() {
  const { isSectionTwo } = useSelector((state) => state.events);

  return (
    <header className="header">
      <div className="container">
        {!isSectionTwo && (
          <>
            <HeaderLogo />
            <HeaderNav />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
