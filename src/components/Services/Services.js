import React, { useEffect, useRef, useState } from "react";
import style from "./service.module.css";

const Services = () => {
  const servicesRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      if (servicesRef.current) {
        const opacity = Math.min(1, scrollPosition / 500);
        servicesRef.current.style.opacity = opacity;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: "fas fa-code",
      title: "Web Development",
      description: `
        My services encompass everything from initial concept design and
        user experience optimization to front-end and back-end development.
        Utilizing the latest technologies and best practices, I ensure that
        each website is not only visually appealing but also functional and
        user-friendly across all devices.
      `,
    },
    {
      id: 2,
      icon: "fab fa-sketch",
      title: "Web Design",
      description: `
        I focus on crafting visually stunning and intuitive websites that
        captivate users and elevate brands. My approach combines aesthetic
        appeal with functionality, ensuring that each design is both
        beautiful and user-friendly. From wireframing and prototyping to
        creating responsive layouts, I prioritize user experience and
        accessibility in every project.
      `,
    },
    {
      id: 3,
      icon: "fab fa-android",
      title: "App Design",
      description: `
        I specialize in creating intuitive and engaging mobile applications
        that enhance user experiences and align with your brand's goals. My
        design process involves understanding user needs through research
        and prototyping, ensuring that each app is both functional and
        visually appealing.
      `,
    },
  ];

  return (
    <div>
      <section
        ref={servicesRef}
        className={`${style.section} ${style.bgGrey}`}
        style={{ opacity: Math.min(1, scrollY / 500) }} // Ensure opacity updates dynamically
      >
        {/* Section Title */}
        <div className={style.sectionTitle}>
          <h2>Services</h2>
          <div className={style.underline}></div>
        </div>
        <br />
        {/* Services Center */}
        <div className={`${style.servicesCenter} ${style.sectionCenter}`}>
          {services.map((service) => (
            <article key={service.id} className={style.service}>
              <i className={`${service.icon} ${style.serviceIcon}`}></i>
              <h4>{service.title}</h4>
              <div className={style.underline}></div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
