import images from "../../images/me.jpg";

import classes from "./HomePage.module.css";

import NavBar from "../../components/NavBar/NavBar.js";

import SocialIcon from "../../components/SocialIcon/SocialIcon.js";

const HomePage = () => {
  return (
    <section className={classes.homepage}>
      <br />
      <NavBar />
      <h1 className={classes.heading}>web developer</h1>
      <img className={classes.image} src={images} alt="" />
      <h3 className={classes["person-name"]}>Anan Serbesa</h3>
      <SocialIcon />
    </section>
  );
};

export default HomePage;
