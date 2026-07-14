import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import portfolio from "../../assets/images/portfolio.png";
import ThemeToggle from "../UI/ThemeToggle";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Journey", path: "#journey" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const smoothScroll = (target, duration) => {
    const headerOffset = 80;
    const start = window.pageYOffset;
    const targetPosition = target.offsetTop - headerOffset;
    const distance = targetPosition - start;
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
      smoothScroll(targetElement, 1000);
    }
    setMenuActive(false);
  };

  const handleClick = (e) => {
    const links = document.querySelectorAll(`.${style["navbar-link"]}`);
    links.forEach((link) => link.classList.remove(style["navbar-link-active"]));
    e.target.classList.add(style["navbar-link-active"]);
    setTimeout(() => {
      e.target.classList.remove(style["navbar-link-active"]);
    }, 300);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav 
      className={`${style.navbar} ${scrolled ? style.scrolled : ''}`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className={style["navbar-container"]}>
        <div className={style["navbar-logo-wrapper"]}>
          <img src={portfolio} alt="Portfolio Logo" className={style["navbar-logo"]} />
        </div>
        
        <ul
          className={`${style["navbar-menu"]} ${
            menuActive ? style.active : ""
          }`}
          role="menu"
        >
          {navItems.map((item, index) => (
            <li key={index} className={style["navbar-item"]} role="none">
              <a
                href={item.path}
                className={style["navbar-link"]}
                role="menuitem"
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
        
        <div className={style["navbar-actions"]}>
          <ThemeToggle />
          <button 
            className={style["navbar-toggle"]} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuActive}
            aria-controls="main-menu"
          >
            <span className={`${style["navbar-toggle-icon"]} ${menuActive ? style.active : ''}`}></span>
            <span className={`${style["navbar-toggle-icon"]} ${menuActive ? style.active : ''}`}></span>
            <span className={`${style["navbar-toggle-icon"]} ${menuActive ? style.active : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
