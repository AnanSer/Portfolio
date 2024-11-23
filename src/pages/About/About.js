import React from "react";
import classes from "./About.module.css";
import images from "../../images/me.jpg";

const About = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.aboutTitle}>about me</h2>
      <div className={classes.underline}></div>

      <p>
        I’m Anan Serbesa, a passionate web developer dedicated to crafting
        dynamic and user-friendly websites. With expertise in front-end and
        back-end technologies like HTML, CSS, JavaScript, React, Node.js, I
        thrive on transforming ideas into functional digital experiences. My
        journey began my web development journey in Haramaya University after
        discovering web technologies , and since then, I have focused on
        delivering high-quality, responsive applications that prioritize user
        experience. I believe in the power of collaboration and communication,
        working closely with clients to ensure their vision is realized. When
        I’m not coding, always eager to learn and connect with fellow tech
        enthusiasts. Thank you for visiting my portfolio!
      </p>
    </section>
  );
};

export default About;
