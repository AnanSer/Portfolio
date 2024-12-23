import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./contactForm.module.css";
import emailjs from "emailjs-com";

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
    emailjs
      .sendForm(
        "service_c4f3c67",
        "template_wftg2cj",
        e.target,
        "s1aoHosd6fDt2Wldn"
      )
      .then(
        (result) => {
          console.log("Form submitted:", result.text);
          alert("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className={styles.contactPage}>
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
