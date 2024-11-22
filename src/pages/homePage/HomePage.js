import images from "../../images/me.jpg";

import classes from "./HomePage.module.css";

import NavBar from "../../components/NavBar/NavBar.js";

const HomePage = () => {
  return (
    <section className={classes.homepage}>
      <br />
      <NavBar />
      <h1 className={classes.heading}>web developer</h1>
      <img className={classes.image} src={images} alt="" />
      <h3 className={classes["person-name"]}>Anan Serbesa</h3>
      <a href="#" className={classes.btn}>
        projects
      </a>
    </section>
  );
};

export default HomePage;
