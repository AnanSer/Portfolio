import React, { useEffect, useRef, useState } from "react";
import style from "./home.module.css";
import me from "../../assets/images/me.jpg";
import { HireMeButton } from "../UI/Button";

const HomePage = () => {
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollPosition = window.scrollY;

      if (profileRef.current) {
        profileRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }

      if (aboutRef.current) {
        aboutRef.current.style.opacity = Math.min(1, scrollPosition / 500);
      }

      if (skillsRef.current) {
        const skillsPosition = skillsRef.current.offsetTop;
        const skillsHeight = skillsRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollPosition > skillsPosition - windowHeight + skillsHeight / 2) {
          skillsRef.current.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style["home-page"]}>
      <section
        id="home"
        className={`${style.hero} ${scrollY > 50 ? style.scrolled : ""}`}
      >
        <div
          className={`${style["hero-content"]} ${
            scrollY > 50 ? style.scrolled : ""
          }`}
        >
          <h1 className={`${style["animate-slide-up"]}`}>
            Welcome to My Portfolio
          </h1>
          <br />

          <h2
            className={`${style["animate-slide-up"]} ${style["animate-delay-1"]}`}
          >
            I'm Anan Serbesa
          </h2>

          <p
            className={`${style["animate-slide-up"]} ${style["animate-delay-2"]}`}
          >
            Web Developer & Designer
          </p>
        </div>

        <div className={style["floating-background"]}></div>

        <div className={style["profile-picture"]} ref={profileRef}>
          <img src={me} alt="anan" />
        </div>
        <HireMeButton />
      </section>
    </div>
  );
};

export default HomePage;
