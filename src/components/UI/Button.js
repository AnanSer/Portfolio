import React from "react";
import { Mail, Send, Briefcase, Phone } from "lucide-react";
import styles from "./button.module.css";

export const HireMeButton = () => (
  <a href="#contact" className={styles["btn-hire-me"]} onClick={smoothScroll}>
    <Phone className={styles["btn-icon"]} />
    HIRE ME
  </a>
);

const smoothScroll = (e) => {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
};

export const ProjectsButton = () => (
  <a href="/projects" className={styles["btn-secondary"]}>
    <Briefcase className={styles["btn-icon"]} />
    PROJECTS
  </a>
);

export const ContactMeButton = () => (
  <a href="/contact" className={styles["btn-tertiary"]}>
    <Mail className={styles["btn-icon"]} />
    CONTACT ME
  </a>
);

export const SendEmailButton = () => (
  <a href="mailto:your.email@gmail.com" className={styles["btn-quaternary"]}>
    <Send className={styles["btn-icon"]} />
    SEND
  </a>
);

const Buttons = () => {
  return (
    <div className={styles["button-container"]}>
      <HireMeButton />
      <ProjectsButton />
      <ContactMeButton />
      <SendEmailButton />
    </div>
  );
};

export default Buttons;
