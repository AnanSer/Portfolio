import { Fragment } from "react";
import HomePage from "../pages/HomePage/HomePage";

import classes from "./Wrapper.module.css";
import NavBar from "./NavBar/NavBar";
const Wrapper = () => {
  return (
    <div className={classes.all}>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Wrapper;
