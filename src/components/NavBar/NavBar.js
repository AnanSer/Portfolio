import React, { useState, useEffect } from "react";
import classes from "./navBar.module.css";

const NavBar = () => {
  const [isNavBarFixed, setIsNavBarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setIsNavBarFixed(true);
      } else {
        setIsNavBarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Combine classes conditionally
  const navBarClass = isNavBarFixed
    ? `${classes.navbar} ${classes["navbar-fixed"]}`
    : classes.navbar;

  return (
    <nav className={navBarClass}>
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
