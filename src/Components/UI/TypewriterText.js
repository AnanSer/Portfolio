import { useState, useEffect } from 'react';
import styles from './TypewriterText.module.css';

const TypewriterText = ({ texts, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[currentIndex];
    
    // Determine the delay for next character
    let delay;
    
    if (!isDeleting && charIndex < fullText.length) {
      // Typing forward
      delay = 100;
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      delay = 50;
    } else if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, pause before deleting
      delay = 2000;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, pause before typing next
      delay = 500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        // Type next character
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        // Start deleting
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        // Delete character
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, delay);

    // Cleanup timeout on unmount or re-render
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, charIndex, currentIndex, texts]);

  return (
    <span className={`${styles.typewriter} ${className}`}>
      {currentText}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default TypewriterText;
