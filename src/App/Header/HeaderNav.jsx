import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <li className="header__ul-li">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="header__ul-li">
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
        <li className="header__ul-li">
          <NavLink to="services">Service</NavLink>
        </li>
        <li className="header__ul-li">Say Hi</li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
