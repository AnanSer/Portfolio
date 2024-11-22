import React from "react";

import classes from "./navBar.module.css";
const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <a href="#" className={classes["navbar-link"]}>
        Home
      </a>
      <a href="#" className={classes["navbar-link"]}>
        About
      </a>
      <a href="#" className={classes["navbar-link"]}>
        Portfolio
      </a>
      <a href="#" className={classes["navbar-link"]}>
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
