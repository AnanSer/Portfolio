import React, { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  Copy, 
  Check,
  CheckCircle2,
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react";
import styles from "./contactForm.module.css";
import emailjs from "emailjs-com";

// Terminal commands with typing animation
const terminalCommands = [
  { command: "status", output: "Available for Work" },
  { command: "location", output: "Ethiopia" },
  { command: "response-time", output: "Usually within 24 hours" },
  { 
    command: "specialization", 
    output: ["Full Stack Development", "Backend Development", "Cloud Computing"] 
  },
];

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);

  // Section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Terminal typing animation
  useEffect(() => {
    if (!isVisible || currentLineIndex >= terminalCommands.length) {
      return;
    }

    const currentCommand = terminalCommands[currentLineIndex];
    setIsTyping(true);

    // Type command
    const commandText = `visitor@portfolio:~$ ${currentCommand.command}`;
    let charIndex = 0;
    const commandTypingInterval = setInterval(() => {
      if (charIndex < commandText.length) {
        charIndex++;
        setTerminalLines((prev) => {
          const newLines = [...prev];
          newLines[newLines.length - 1] = commandText.slice(0, charIndex);
          return newLines;
        });
      } else {
        clearInterval(commandTypingInterval);
        
        // Show output after command
        setTimeout(() => {
          const output = Array.isArray(currentCommand.output)
            ? currentCommand.output
            : [currentCommand.output];
          
          setTerminalLines((prev) => [...prev.slice(0, -1), commandText, ...output, ""]);
          setIsTyping(false);
          setCurrentLineIndex((prev) => prev + 1);
        }, 300);
      }
    }, 50);

    if (terminalLines.length === 0) {
      setTerminalLines([""]);
    }

    return () => clearInterval(commandTypingInterval);
  }, [isVisible, currentLineIndex]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare template parameters
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_name: "Anan Serbesa",
    };
    
    emailjs
      .send(
        "service_c4f3c67",
        "template_wftg2cj",
        templateParams,
        "s1aoHosd6fDt2Wldn"
      )
      .then(
        (result) => {
          console.log("Form submitted:", result.text);
          setShowSuccess(true);
          setFormState({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          alert("Failed to send message. Please try again or contact me directly at ananserbesa@gmail.com");
          setIsSubmitting(false);
        }
      );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ananserbesa@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles['contact-section']} ${isVisible ? styles.visible : ''}`}
      aria-label="Contact section"
    >
      {/* Animated Background */}
      <div className={styles['background-wrapper']}>
        <div className={styles['grid-pattern']}></div>
        <div className={styles['gradient-blob-1']}></div>
        <div className={styles['gradient-blob-2']}></div>
        <div className={styles['particles']}></div>
      </div>

      {/* Section Header */}
      <div className={styles['section-header']}>
        <span className={styles.eyebrow}>Get In Touch</span>
        <h2 className={styles['section-title']}>Let's Work Together</h2>
        <p className={styles['section-subtitle']}>
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      {/* Content Grid */}
      <div className={styles['content-grid']}>
        {/* Left Column: Terminal + Contact Info */}
        <div className={styles['left-column']}>
          {/* Developer Terminal */}
          <div className={styles.terminal}>
            {/* Terminal Header */}
            <div className={styles['terminal-header']}>
              <div className={styles['terminal-controls']}>
                <span className={`${styles['control-dot']} ${styles.red}`}></span>
                <span className={`${styles['control-dot']} ${styles.yellow}`}></span>
                <span className={`${styles['control-dot']} ${styles.green}`}></span>
              </div>
              <span className={styles['terminal-title']}>developer@portfolio</span>
              <div className={styles['terminal-spacer']}></div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalRef}
              className={styles['terminal-body']}
              role="log"
              aria-live="polite"
              aria-label="Developer terminal output"
            >
              {terminalLines.map((line, index) => (
                <div key={index} className={styles['terminal-line']}>
                  {line}
                  {index === terminalLines.length - 1 && 
                   currentLineIndex >= terminalCommands.length && 
                   showCursor && (
                    <span className={styles.cursor}>█</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information Panel */}
          <div className={styles['contact-info-panel']}>
            {/* Email */}
            <div className={styles['info-item']}>
              <div className={styles['info-icon']}>
                <Mail size={13} strokeWidth={2} />
              </div>
              <div className={styles['info-content']}>
                <span className={styles['info-label']}>EMAIL</span>
                <span className={styles['info-value']}>ananserbesa2423@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className={styles['info-item']}>
              <div className={styles['info-icon']}>
                <Phone size={13} strokeWidth={2} />
              </div>
              <div className={styles['info-content']}>
                <span className={styles['info-label']}>PHONE</span>
                <span className={styles['info-value']}>+251 938563663</span>
              </div>
            </div>

            {/* Location */}
            <div className={styles['info-item']}>
              <div className={styles['info-icon']}>
                <MapPin size={13} strokeWidth={2} />
              </div>
              <div className={styles['info-content']}>
                <span className={styles['info-label']}>LOCATION</span>
                <span className={styles['info-value']}>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Message */}
            <div className={styles['info-message']}>
              <div className={styles['message-icon']}>
                <MessageCircle size={14} strokeWidth={2} />
              </div>
              <div className={styles['message-content']}>
                <h4 className={styles['message-title']}>Have a project in mind?</h4>
                <p className={styles['message-text']}>
                  Send me a message — I usually reply within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Availability + Form */}
        <div className={styles['right-column']}>
          {/* Availability Card */}
          <div className={styles['availability-card']}>
            <span className={styles['status-indicator']}></span>
            <div className={styles['availability-content']}>
              <span className={styles['availability-title']}>Available for</span>
              <div className={styles['availability-tags']}>
                <span className={styles.tag}>Freelance</span>
                <span className={styles.tag}>Remote</span>
                <span className={styles.tag}>Full-Time</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            className={styles['contact-form']} 
            onSubmit={handleSubmit}
            aria-label="Contact form"
            noValidate
          >
            <div className={styles['input-group']}>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
                aria-required="true"
                autoComplete="name"
              />
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
            </div>

            <div className={styles['input-group']}>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
                aria-required="true"
                autoComplete="email"
              />
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <button
                type="button"
                onClick={copyEmail}
                className={styles['copy-btn']}
                aria-label={emailCopied ? "Email copied" : "Copy email address"}
                title="Copy my email"
              >
                {emailCopied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <div className={styles['input-group']}>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
                aria-required="true"
                rows="5"
              ></textarea>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
            </div>

            <button 
              type="submit" 
              className={styles['submit-button']}
              disabled={isSubmitting}
              aria-label="Send message"
            >
              <span className={styles['button-text']}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <Send className={styles['send-icon']} size={16} aria-hidden="true" />
            </button>
          </form>

          {/* Quick Contact Buttons */}
          <div className={styles['quick-contacts']}>
            <a
              href="mailto:ananserbesa@gmail.com"
              className={styles['contact-btn']}
              aria-label="Send email"
            >
              <Mail size={16} strokeWidth={2} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/AnanSer"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['contact-btn']}
              aria-label="Visit GitHub profile"
            >
              <Github size={16} strokeWidth={2} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anan-serbesa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['contact-btn']}
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={16} strokeWidth={2} />
              <span>LinkedIn</span>
            </a>
            <a
              href={require("../../assets/images/Anan_Serbesa_CV.pdf")}
              download="Anan_Serbesa_CV.pdf"
              className={styles['contact-btn']}
              aria-label="Download resume"
            >
              <Download size={16} strokeWidth={2} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
      {/* Success Message */}
      {showSuccess && (
        <div className={styles['success-card']} role="alert" aria-live="polite">
          <div className={styles['success-icon']}>
            <CheckCircle2 size={48} strokeWidth={2} />
          </div>
          <h3 className={styles['success-title']}>Message Sent Successfully!</h3>
          <p className={styles['success-text']}>
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
