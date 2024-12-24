import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p className={styles.footerText}>Web Developer & Designer</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/anan-ser1177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/AnanSer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/__anan_242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Anan Serbesa . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
