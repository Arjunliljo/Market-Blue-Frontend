import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
