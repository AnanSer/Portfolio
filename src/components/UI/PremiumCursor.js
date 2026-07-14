import React, { useEffect, useRef, useState } from 'react';
import styles from './PremiumCursor.module.css';

const PremiumCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check if target is an Element node before using closest
      if (!target || !(target instanceof Element)) return;
      
      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains(styles['cursor-hover']) ||
        target.closest('[data-cursor="pointer"]')
      ) {
        cursorDot?.classList.add(styles.hover);
        cursorRing?.classList.add(styles.hover);
      }

      // Check for input elements
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        cursorDot?.classList.add(styles.input);
        cursorRing?.classList.add(styles.input);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      
      // Check if target is an Element node before using closest
      if (!target || !(target instanceof Element)) return;
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains(styles['cursor-hover']) ||
        target.closest('[data-cursor="pointer"]')
      ) {
        cursorDot?.classList.remove(styles.hover);
        cursorRing?.classList.remove(styles.hover);
      }

      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        cursorDot?.classList.remove(styles.input);
        cursorRing?.classList.remove(styles.input);
      }
    };

    // Smooth cursor animation
    const animateCursor = () => {
      if (!cursorDot || !cursorRing) return;

      // Smooth interpolation for dot (faster)
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.3;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.3;

      // Smooth interpolation for ring (slower for trailing effect)
      ringPositionRef.current.x += (targetRef.current.x - ringPositionRef.current.x) * 0.15;
      ringPositionRef.current.y += (targetRef.current.y - ringPositionRef.current.y) * 0.15;

      cursorDot.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      cursorRing.style.transform = `translate(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px)`;

      requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start animation
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      cancelAnimationFrame(animationId);
    };
  }, [isTouch, prefersReducedMotion]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <>
      <div ref={cursorDotRef} className={styles['cursor-dot']} aria-hidden="true" />
      <div ref={cursorRingRef} className={styles['cursor-ring']} aria-hidden="true" />
    </>
  );
};

export default PremiumCursor;
