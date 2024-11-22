import React from "react";
import classes from "./SocialIcon.module.css"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquarespace,
  faBehance,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = () => {
  return (
    <section className={classes["social-icons"]}>
      <li>
        <a
          href="https://www.facebook.com"
          className={classes["social-icon"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com"
          className={classes["social-icon"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://www.squarespace.com"
          className={classes["social-icon"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquarespace} />
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net"
          className={classes["social-icon"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com"
          className={classes["social-icon"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </section>
  );
};

export default SocialIcon;
