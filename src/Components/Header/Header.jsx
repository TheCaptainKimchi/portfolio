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
          <img className="menu-active__x-icon" alt="x-icon" src={X}></img>
        </button>
        <ul className="menu-active__list">
          <a
            className="menu-active__list-item menu-active__list-item--about"
            href="#about"
          >
            <li>About</li>
          </a>

          <a
            className="menu-active__list-item menu-active__list-item--projects"
            href="#projects"
          >
            <li>Project</li>
          </a>

          <a
            className="menu-active__list-item menu-active__list-item--contact"
            href="#contact"
          >
            <li>Contact</li>
          </a>
        </ul>
      </menu>

      <nav className="header__nav-desktop">
        <ul className="header__nav-desktop-list">
          <a
            className="header__nav-desktop-list-item header__nav-desktop-list-item--1"
            href="#about"
          >
            <li>About</li>
          </a>
          <a
            className="header__nav-desktop-list-item header__nav-desktop-list-item--2"
            href="#projects"
          >
            <li>Projects</li>
          </a>
          <a
            className="header__nav-desktop-list-item header__nav-desktop-list-item--3"
            href="#contact"
          >
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
