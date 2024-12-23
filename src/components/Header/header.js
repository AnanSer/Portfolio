import React from "react";
import style from "./header.module.css";
import portfolio from "../../assets/images/portfolio.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className={style.navbar}>
      <div className={style["navbar-container"]}>
        <img src={portfolio} alt="Logo" className={style["navbar-logo"]} />
        <ul className={style["navbar-menu"]}>
          {navItems.map((item, index) => (
            <li key={index} className={style["navbar-item"]}>
              <a href={item.path} className={style["navbar-link"]}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className={style["navbar-toggle"]}>
          <span className={style["navbar-toggle-icon"]}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
