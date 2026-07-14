import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";
import styles from "./footer.module.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p className={styles.footerText}>Web Developer &amp; Designer</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect</h3>
          <div className={styles.socialIcons} role="list" aria-label="Social media links">
            <a
              href="https://linkedin.com/in/anan-serbesa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              role="listitem"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/AnanSer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              role="listitem"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              role="listitem"
            >
              <Twitter size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              role="listitem"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/__anan_242/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              role="listitem"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {currentYear} Anan Serbesa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
