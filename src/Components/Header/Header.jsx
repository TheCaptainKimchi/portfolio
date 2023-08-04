import "./Header.scss";
import X from "../../Assets/Icons/x-icon.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <a className="header__name" href="/">
        <h3 className="header__name-text">R</h3>
      </a>
      <nav className="header__nav">
        <button className="header__nav-container" onClick={toggleMenu}>
          <div className="header__nav-container-bar header__nav-container-bar--1"></div>
          <div className="header__nav-container-bar header__nav-container-bar--2"></div>
          <div className="header__nav-container-bar header__nav-container-bar--3"></div>
        </button>
      </nav>

      <menu className={`menu ${isMenuActive ? "menu-active" : ""}`}>
        <button className="menu-active__x" onClick={toggleMenu}>
          <img className="menu-active__x-icon" src={X}></img>
        </button>
        <ul className="menu-active__list">
          <a
            className="menu-active__list-item menu-active__list-item--about"
            href="/"
          >
            <li>About</li>
          </a>

          <a
            className="menu-active__list-item menu-active__list-item--projects"
            href="/"
          >
            <li>Project</li>
          </a>

          <a
            className="menu-active__list-item menu-active__list-item--contact"
            href="/"
          >
            <li>Contact</li>
          </a>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
