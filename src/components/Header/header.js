import React from "react";
import style from "./header.module.css";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className={style.navbar}>
      <div className={style["navbar-container"]}>
        <a href="#" className={style["navbar-logo"]}>
          Logo
        </a>
        <ul className={style["navbar-menu"]}>
          {navItems.map((item, index) => (
            <li key={index} className={style["navbar-item"]}>
              <a href="#" className={style["navbar-link"]}>
                {item}
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
