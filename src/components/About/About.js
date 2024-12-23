import React, { useRef, useState, useEffect } from "react";
import style from "./about.module.css";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollPosition = window.scrollY;

      if (aboutRef.current) {
        aboutRef.current.style.opacity = Math.min(1, scrollPosition / 500);
        aboutRef.current.style.transform = `translateY(${
          scrollPosition * 0.1
        }px)`;
      }

      if (skillsRef.current) {
        const skillsPosition = skillsRef.current.offsetTop;
        const skillsHeight = skillsRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollPosition > skillsPosition - windowHeight + skillsHeight / 2) {
          skillsRef.current.classList.add(style.visible);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={style["container"]} id={"about"}>
      <section
        className={`${style.about} ${scrollY > 300 ? style.visible : ""}`}
        ref={aboutRef}
      >
        <h2>About Me</h2>
        <p>
          I’m Anan Serbesa, a passionate web developer dedicated to crafting
          dynamic and user-friendly websites. With expertise in front-end and
          back-end technologies like HTML, CSS, JavaScript, React, and Node.js,
          I thrive on transforming ideas into functional digital experiences. My
          journey began at Haramaya University after discovering web
          technologies, and since then, I have focused on delivering
          high-quality, responsive applications that prioritize user experience.{" "}
          <br /> <br />I believe in the power of collaboration and
          communication, working closely with clients to ensure their vision is
          realized. When I’m not coding, I am always eager to learn and connect
          with fellow tech enthusiasts. Thank you for visiting my portfolio!
        </p>
      </section>
      <section
        className={`${style.skills} ${scrollY > 600 ? style.visible : ""}`}
        ref={skillsRef}
      >
        <h2>My Skills</h2>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
