import { Fragment } from "react";
import HomePage from "../pages/HomePage/HomePage";

import classes from "./Wrapper.module.css";
import NavBar from "./NavBar/NavBar";
import About from "../pages/About/About";

const Wrapper = () => {
  return (
    <div className={classes.all}>
      <NavBar />
      <HomePage />
      <About />
    </div>
  );
};

export default Wrapper;
