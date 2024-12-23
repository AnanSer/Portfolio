import React from "react";
import style from "./projects.module.css";

const projectsData = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A dynamic web application that enables users to effortlessly track their expenses, manage budgets, and visualize their financial data in real-time for smarter financial management.",
    image: "../../assets/images/buget tracker.png",
    githubLink: "https://github.com/AnanSer/Expense-Tracker",
  },
  {
    id: 2,
    title: "Food Order",
    description:
      "Designed to streamline the online ordering experience. This dynamic web application allows users to browse a variety of menu items, customize their orders, and easily manage their selections in real-time.",
    image: "../../assets/images/food order.png",
    githubLink: "https://github.com/AnanSer/Food_Order_App",
  },
  {
    id: 3,
    title: "Creative Design",
    description:
      "Elevates the user experience through visually appealing elements and intuitive navigation.",
    image: "../../assets/images/creative-design.png",
    githubLink: "https://github.com/AnanSer/Expense-Tracker",
  },
  {
    id: 4,
    title: "Food",
    description:
      "The design invites users to explore a diverse menu while ensuring easy navigation. Each element is thoughtfully arranged to guide users seamlessly.",
    image: "../../assets/images/food1.png",
    githubLink: "https://github.com/AnanSer/food",
  },
  {
    id: 5,
    title: "Add User",
    description:
      "Implemented a seamless user registration and management system that enhances user experience by allowing individuals to easily create accounts, manage their profiles, and access personalized features within the application.",
    image: "../../assets/images/adduser.png",
    githubLink: "https://github.com/AnanSer/UserFormInterface",
  },
  {
    id: 6,
    title: "Task Management",
    description:
      "Developed a comprehensive task management application that enhances productivity by allowing users to create, prioritize, and track tasks seamlessly, fostering collaboration and efficient workflow through intuitive design and real-time updates.",
    image: "../../assets/images/taskManagemnt.png",
    githubLink: "https://github.com/AnanSer/Styling-Task-Management-project",
  },
];

const Projects = () => {
  return (
    <section className={style["section projects"]} id="projects">
      <div className={style["section-title"]}>
        <h2>Projects</h2>
        <div className={style["underline"]}></div>
        <p className={style["projects-text"]}>
          Explore my diverse range of projects that showcase my skills in web
          development, design, and innovative problem-solving, each crafted to
          meet unique client needs and enhance user experiences.
        </p>
      </div>
      <div className={style["section-center projects-page-center"]}>
        {projectsData.map((project) => (
          <article className={style["single-project"]} key={project.id}>
            <div className={style["project-container"]}>
              <img src={project.image} alt={project.title} />
              <a
                href="https://github.com/AnanSer"
                className={style["project-icon"]}
              >
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className={style["project-details"]}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className={style["project-footer"]}>
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href={project.githubLink}>source code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
