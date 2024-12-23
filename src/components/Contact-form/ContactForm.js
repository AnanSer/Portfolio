import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./contactForm.module.css";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formState);
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor="name" className={styles.label}>
            Your Name
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Your Email
          </label>
        </div>
        <div className={styles.inputGroup}>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className={styles.input}
          ></textarea>
          <label htmlFor="message" className={styles.label}>
            Your Message
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          <span className={styles.buttonText}>Send Message</span>
          <Send className={styles.sendIcon} size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
