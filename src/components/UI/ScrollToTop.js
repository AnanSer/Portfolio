import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Show button after scrolling 300px
      setIsVisible(scrolled > 300);
      
      // Calculate scroll progress for the ring
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles['scroll-to-top']} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <svg className={styles['progress-ring']} width="54" height="54">
        <circle
          className={styles['progress-ring-circle']}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          r="24"
          cx="27"
          cy="27"
          style={{
            strokeDasharray: `${2 * Math.PI * 24}`,
            strokeDashoffset: `${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`
          }}
        />
      </svg>
      <ArrowUp className={styles.icon} size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
