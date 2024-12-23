import React, { useEffect, useRef } from "react";
import { Code, Palette, Smartphone } from "lucide-react"; // Fix the import for Smartphone
import styles from "./service.module.css";

const services = [
  {
    icon: <Code size={48} />,
    title: "Web Development",
    description:
      " My services encompass everything from initial concept design and user experience optimization to front-end and back-end development. Utilizing the latest technologies and best practices, I ensure that each website is not only visually appealing but also functional and user-friendly across all devices.",
  },
  {
    icon: <Palette size={48} />,
    title: "UI/UX Design",
    description:
      "Professional Profile: A passionate and innovative UI/UX Designer dedicated to transforming complex challenges into elegant, user-centered digital experiences. I create intuitive interfaces that seamlessly blend aesthetics, functionality, and human-centered solutions.",
  },
  {
    icon: <Smartphone size={48} />, // Use the correct icon
    title: "App Development",
    description:
      "  I specialize in creating intuitive and engaging mobile applications that enhance user experiences and align with your brand's goals. My design process involves understanding user needs through research and prototyping, ensuring that each app is both functional and visually appealing.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          } else {
            entry.target.classList.remove(styles.animate);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const serviceItems = servicesRef.current.querySelectorAll(
      `.${styles.serviceItem}`
    );
    serviceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services} id="services" ref={servicesRef}>
      <h2 className={styles.title}>My Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
