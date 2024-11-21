import images from "../../images/me.jpg";

import { classes } from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={classes.homepage}>
      <h1 className={classes.heading}>web developer</h1>

      <img className="image" src={images} alt="" />
      <h3 className="person-name">Anan Serbesa</h3>
      <a href="#" className="btn">
        projects
      </a>
    </section>
  );
};

export default HomePage;
