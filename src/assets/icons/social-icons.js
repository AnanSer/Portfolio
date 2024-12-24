import React from "react";
import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";
import styles from "./social-icons.module.css"; // Import the CSS file for styles

const SocialIcons = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/anan-ser1177/",
      icon: <Linkedin />,
    },
    {
      href: "https://github.com/AnanSer",
      icon: <Github />,
    },
    {
      href: "https://x.com/anan_ser1177",
      icon: <Twitter />,
    },
    {
      href: "https://www.facebook.com",
      icon: <Facebook />,
    },
    {
      href: "https://www.instagram.com/__anan_242/",
      icon: <Instagram />,
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
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
