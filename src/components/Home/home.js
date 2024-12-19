import React, { useEffect, useRef, useState } from "react";
import style from "./home.module.css";

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
          <p
            className={`${style["animate-slide-up"]} ${style["animate-delay-1"]}`}
          >
            Web Developer & Designer
          </p>
        </div>
        <div className={style["profile-picture"]} ref={profileRef}>
          <img src="/placeholder.svg?height=300&width=300" alt="Your Name" />
        </div>
      </section>
      <section
        className={`${style.about} ${scrollY > 300 ? style.visible : ""}`}
        ref={aboutRef}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with a keen eye for design. I love
          creating beautiful and functional websites that make a difference.
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

export default HomePage;

// import React, { useEffect, useRef } from "react";
// import style from "./home.module.css";
// import me from "../../assets/images/me.jpg";

// const HomePage = () => {
//   const profileRef = useRef(null);
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       if (profileRef.current) {
//         profileRef.current.style.transform = `translateY(${
//           scrollPosition * 0.3
//         }px)`;
//       }

//       if (aboutRef.current) {
//         aboutRef.current.style.opacity = Math.min(1, scrollPosition / 500);
//       }

//       if (skillsRef.current) {
//         const skillsPosition = skillsRef.current.offsetTop;
//         const skillsHeight = skillsRef.current.offsetHeight;
//         const windowHeight = window.innerHeight;

//         if (scrollPosition > skillsPosition - windowHeight + skillsHeight / 2) {
//           skillsRef.current.classList.add("visible");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={style["home-page"]}>
//       <section className={style["hero"]}>
//         <div className={style["hero-content"]}>
//           <h1>Welcome to My Portfolio</h1>
//           <p>Web Developer & Designer</p>
//         </div>
//         <div className={style["profile-picture"]} ref={profileRef}>
//           <img src={me} alt="Your Name" />
//         </div>
//       </section>
//       <section className={style["about"]} ref={aboutRef}>
//         <h2>About Me</h2>
//         <p>
//           I'm a passionate web developer with a keen eye for design. I love
//           creating beautiful and functional websites that make a difference.
//         </p>
//       </section>
//       <section className={style["skills"]} ref={skillsRef}>
//         <h2>My Skills</h2>
//         <ul>
//           <li>HTML5 & CSS3</li>
//           <li>JavaScript (ES6+)</li>
//           <li>React</li>
//           <li>Node.js</li>
//           <li>UI/UX Design</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
