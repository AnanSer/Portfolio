import React, { useState } from "react";
import style from "./header.module.css";
import portfolio from "../../assets/images/portfolio.png";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const smoothScroll = (target, duration) => {
    const start = window.pageYOffset;
    const end = target.offsetTop;
    const distance = end - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed / duration) * distance + start;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      smoothScroll(targetElement, 1000); // 1000ms for the duration
    }
    setMenuActive(false);
  };

  const handleClick = (e) => {
    const links = document.querySelectorAll(`.${style["navbar-link"]}`);
    links.forEach((link) => link.classList.remove(style["navbar-link-active"]));
    e.target.classList.add(style["navbar-link-active"]);
    setTimeout(() => {
      e.target.classList.remove(style["navbar-link-active"]);
    }, 300); // Duration of the active effect
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={style.navbar}>
      <div className={style["navbar-container"]}>
        <img src={portfolio} alt="Logo" className={style["navbar-logo"]} />
        <ul
          className={`${style["navbar-menu"]} ${
            menuActive ? style.active : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className={style["navbar-item"]}>
              <a
                href={item.path}
                className={style["navbar-link"]}
                onClick={(e) => {
                  handleSmoothScroll(e, item.path);
                  handleClick(e);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className={style["navbar-toggle"]} onClick={toggleMenu}>
          <span className={style["navbar-toggle-icon"]}></span>
          <span className={style["navbar-toggle-icon"]}></span>
          <span className={style["navbar-toggle-icon"]}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
