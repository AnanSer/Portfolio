import images from "../../images/me.jpg";

import "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className="homepage">
      <h1 className="heading">web developer</h1>

      <img className="image" src={images} alt="" />
      <h3 className="person-name">Anan Serbesa</h3>
      <a href="#" className="btn">
        projects
      </a>
    </section>
  );
};

export default HomePage;
