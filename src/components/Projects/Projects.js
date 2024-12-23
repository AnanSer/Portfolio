import React, { useEffect, useRef } from "react";
import { GitlabIcon as GitHub, ExternalLink } from "lucide-react";

import styles from "./projects.module.css";
import BudgetTracker from "../../assets/images/budget tracker.png"; // Fix the import
import Food_Order_App from "../../assets/images/food order.png";
import creative_design from "../../assets/images/creative-design.png";
import adduser from "../../assets/images/adduser.png";
import taskManagement from "../../assets/images/taskManagemnt.png";
import Food from "../../assets/images/food1.png";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "  A dynamic web application that enables users to effortlessly track their expenses, manage budgets, and visualize their financial data in real-time for smarter financial management.",
    image: BudgetTracker,
    github: "https://github.com/AnanSer/Expense-Tracker",
    technologies: ["REACT", "CSS", "JavaScript"],
  },

  {
    title: "Food Order",
    description:
      "Designed to streamline the online ordering experience. This dynamic web application allows users to browse a variety of menu items, customize their orders, and easily manage their selections in real-time.",
    image: Food_Order_App,
    github: "https://github.com/AnanSer/Food_Order_App",
    technologies: ["React", "firebase", "CSS", "javascript"],
  },

  {
    title: "Creative Design",
    description:
      "Elevates the user experience through visually appealing elements and intuitive navigation.",
    image: creative_design,
    github: "https://github.com/AnanSer/Expense-Tracker",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Food",
    description:
      "The design invites users to explore a diverse menu while ensuring easy navigation. Each element is thoughtfully arranged to guide users seamlessly.",
    image: Food,
    github: "https://github.com/AnanSer/food",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Add User",
    description:
      "Implemented a seamless user registration and management system that enhances user experience by allowing individuals to easily create accounts, manage their profiles, and access personalized features within the application.",
    image: adduser,
    github: "https://github.com/AnanSer/UserFormInterface",
    technologies: ["REACT", "CSS", "JavaScript"],
  },

  {
    title: "Task Management",
    description:
      "  Developed a comprehensive task management application that enhances productivity by allowing users to create, prioritize, and track tasks seamlessly, fostering collaboration and efficient workflow through intuitive design and real-time updates.",
    image: taskManagement,
    github: "https://github.com/AnanSer/Styling-Task-Management-project",
    technologies: ["React", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const projectsRef = useRef(null);

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

    const projectItems = projectsRef.current.querySelectorAll(
      `.${styles.projectItem}`
    );
    projectItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={projectsRef}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <GitHub size={20} />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.technology}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
