import React from "react";
import styles from "./social-icons.module.css"; // Import the CSS file for styles

const SocialIcons = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/anan-ser1177/",
      className: "fab fa-linkedin",
    },
    {
      href: "https://github.com/AnanSer",
      className: "fab fa-github",
    },
    {
      href: "https://x.com/anan_ser1177",
      className: "fab fa-twitter",
    },
    {
      href: "https://www.facebook.com",
      className: "fab fa-facebook",
    },
    {
      href: "https://www.instagram.com/__anan_242/",
      className: "fab fa-instagram",
    },
  ];

  return (
    <ul className={styles["social-icons"]}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className={styles["social-icon"]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }} // Hide the white dot or marker
          >
            <i className={link.className}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
