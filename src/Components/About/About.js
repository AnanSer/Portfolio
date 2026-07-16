import React, { useRef, useState, useEffect } from "react";
import style from "./about.module.css";
import TechStack from "../TechStack/TechStack";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollPosition = window.scrollY;

      if (aboutRef.current) {
        // Fade in effect only - removed translateY to prevent overlap
        aboutRef.current.style.opacity = Math.min(1, scrollPosition / 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={style["container"]} id="about">
      <section
        className={`${style.about} ${scrollY > 300 ? style.visible : ""}`}
        ref={aboutRef}
        aria-label="About me section"
      >
        <h2>About Me</h2>
        <p>
          I'm Anan Serbesa, a passionate web developer dedicated to crafting
          dynamic and user-friendly websites. With expertise in front-end and
          back-end technologies like HTML, CSS, JavaScript, React, and Node.js,
          I thrive on transforming ideas into functional digital experiences. My
          journey began at Haramaya University after discovering web
          technologies, and since then, I have focused on delivering
          high-quality, responsive applications that prioritize user experience.
        </p>
        <p>
          I believe in the power of collaboration and
          communication, working closely with clients to ensure their vision is
          realized. When I'm not coding, I am always eager to learn and connect
          with fellow tech enthusiasts. Thank you for visiting my portfolio!
        </p>
      </section>

      {/* Modern Tech Stack Showcase */}
      <TechStack />
    </div>
  );
};

export default About;
