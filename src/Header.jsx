import React from "react";

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <span className="brand">My Profile</span>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#profile">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#sosmed">Sosmed</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#galeri">Galery</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;