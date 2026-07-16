import React, { useEffect, useRef, useState } from "react";
import style from "./home.module.css";
import mypic from "../../assets/images/mypic.jpeg";
import { HireMeButton } from "../UI/Button";
import FloatingElements from "../Background/FloatingElements";
import TypewriterText from "../UI/TypewriterText";
import Statistics from "../Statistics/Statistics";

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
        aria-label="Hero section"
      >
        {/* Animated Gradient Mesh Background - Hero Only */}
        <FloatingElements />

        <div className={style["hero-content-wrapper"]}>
          <div
            className={`${style["hero-content"]} ${
              scrollY > 50 ? style.scrolled : ""
            }`}
          >
            <div className={style["hero-badge"]}>
              <span className={style["badge-dot"]}></span>
              Available for Work
            </div>

            <h1 className={`${style["hero-title"]} ${style["animate-slide-up"]}`}>
              Anan Serbesa
            </h1>

            <h2
              className={`${style["hero-subtitle"]} ${style["animate-slide-up"]} ${style["animate-delay-1"]}`}
            >
              <TypewriterText
                texts={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Next.js Developer",
                  "Node.js Developer",
                  "TypeScript Developer"
                ]}
              />
            </h2>

            <p
              className={`${style["hero-description"]} ${style["animate-slide-up"]} ${style["animate-delay-2"]}`}
            >
              Crafting beautiful, functional digital experiences with modern web technologies
            </p>
            
            <div className={`${style["hero-actions"]} ${style["animate-slide-up"]} ${style["animate-delay-3"]}`}>
              <HireMeButton />
              <a href="#projects" className={style["btn-view-projects"]} onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <svg className={style["btn-icon"]} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                View Projects
              </a>
            </div>

            {/* Professional Statistics */}
            <Statistics />
          </div>
        </div>

        <div className={style["profile-picture"]} ref={profileRef}>
          <img src={mypic} alt="Anan Serbesa - Web Developer and Designer" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
