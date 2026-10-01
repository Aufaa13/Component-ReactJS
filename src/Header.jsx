import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <span className="brand">My Profile</span>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;