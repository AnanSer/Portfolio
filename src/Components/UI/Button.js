import React from "react";
import { Mail, Send, Briefcase, Phone } from "lucide-react";
import styles from "./button.module.css";
import useMagneticEffect from "../../hooks/useMagneticEffect";
import useRippleEffect from "../../hooks/useRippleEffect";

export const HireMeButton = () => {
  const magneticRef = useMagneticEffect(0.3, 10);
  const createRipple = useRippleEffect();

  return (
    <a
      ref={magneticRef}
      href="#contact"
      className={styles["btn-hire-me"]}
      onClick={(e) => {
        createRipple(e);
        smoothScroll(e);
      }}
      data-cursor="pointer"
    >
      <Phone className={styles["btn-icon"]} />
      HIRE ME
    </a>
  );
};

const smoothScroll = (e) => {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute("href"))?.scrollIntoView({
    behavior: "smooth",
  });
};

export const ProjectsButton = () => {
  const magneticRef = useMagneticEffect(0.3, 10);
  const createRipple = useRippleEffect();

  return (
    <a
      ref={magneticRef}
      href="/projects"
      className={styles["btn-secondary"]}
      onClick={createRipple}
      data-cursor="pointer"
    >
      <Briefcase className={styles["btn-icon"]} />
      PROJECTS
    </a>
  );
};

export const ContactMeButton = () => {
  const magneticRef = useMagneticEffect(0.3, 10);
  const createRipple = useRippleEffect();

  return (
    <a
      ref={magneticRef}
      href="/contact"
      className={styles["btn-tertiary"]}
      onClick={createRipple}
      data-cursor="pointer"
    >
      <Mail className={styles["btn-icon"]} />
      CONTACT ME
    </a>
  );
};

export const SendEmailButton = () => {
  const magneticRef = useMagneticEffect(0.3, 10);
  const createRipple = useRippleEffect();

  return (
    <a
      ref={magneticRef}
      href="mailto:your.email@gmail.com"
      className={styles["btn-quaternary"]}
      onClick={createRipple}
      data-cursor="pointer"
    >
      <Send className={styles["btn-icon"]} />
      SEND
    </a>
  );
};

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
