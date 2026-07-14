import React, { useEffect, useRef, useState } from 'react';
import styles from './FloatingElements.module.css';

const FloatingElements = () => {
  const containerRef = useRef(null);
  const [elements] = useState(() => generateElements());

  useEffect(() => {
    // Optional: Add subtle mouse parallax effect
    const handleMouseMove = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.innerWidth < 768) return; // Disable on mobile
      
      const container = containerRef.current;
      if (!container) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset from center (normalized -1 to 1)
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      
      // Apply subtle transform to container (max 10px movement)
      const moveX = offsetX * 5;
      const moveY = offsetY * 5;
      
      container.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const throttledMouseMove = throttle(handleMouseMove, 16); // ~60fps
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef} aria-hidden="true">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`${styles.element} ${styles[`layer-${element.layer}`]}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            opacity: element.opacity,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
            transform: `rotate(${element.rotation}deg)`,
          }}
        >
          {element.content}
        </div>
      ))}
    </div>
  );
};

// Generate random floating elements
function generateElements() {
  const elements = [];
  
  // Developer-themed content pool
  const contentPool = [
    // Code syntax
    '{}', '</>', '=>', '()', '[]', '$', '#', '@', '*', '/', '//',
    // Keywords
    'const', 'let', 'async', 'await', 'return', 'function', 'class', 'import',
    // Technologies
    'React', 'Node', 'Git', 'API', 'JSON', 'CSS', 'HTML', 'JS', 'TS',
    'npm', 'Docker', 'AWS', 'SQL', 'NoSQL', 'REST', 'GraphQL',
    // More symbols
    '&lt;/&gt;', '{ }', '[ ]', '&lt;&gt;', '===', '!==', '++', '--',
  ];

  // Get responsive element counts
  const counts = getElementCounts();
  
  // Layer 1: Background - tiny, very transparent, slow
  for (let i = 0; i < counts.layer1; i++) {
    elements.push({
      layer: 1,
      content: randomItem(contentPool),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: randomRange(10, 16),
      opacity: randomRange(0.02, 0.06),
      duration: randomRange(40, 60),
      delay: Math.random() * -30,
      rotation: randomRange(-15, 15),
    });
  }
  
  // Layer 2: Midground - medium, semi-transparent, medium speed
  for (let i = 0; i < counts.layer2; i++) {
    elements.push({
      layer: 2,
      content: randomItem(contentPool),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: randomRange(16, 24),
      opacity: randomRange(0.05, 0.10),
      duration: randomRange(25, 40),
      delay: Math.random() * -20,
      rotation: randomRange(-20, 20),
    });
  }
  
  // Layer 3: Foreground - larger, highlighted, very subtle
  for (let i = 0; i < counts.layer3; i++) {
    elements.push({
      layer: 3,
      content: randomItem(contentPool),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: randomRange(24, 36),
      opacity: randomRange(0.08, 0.14),
      duration: randomRange(30, 50),
      delay: Math.random() * -25,
      rotation: randomRange(-10, 10),
    });
  }
  
  return elements;
}

// Get element counts based on screen size
function getElementCounts() {
  const width = window.innerWidth;
  
  if (width >= 1440) {
    // Desktop: Full experience
    return { layer1: 40, layer2: 25, layer3: 15 };
  } else if (width >= 1024) {
    // Laptop
    return { layer1: 30, layer2: 20, layer3: 10 };
  } else if (width >= 768) {
    // Tablet
    return { layer1: 20, layer2: 15, layer3: 8 };
  } else {
    // Mobile: Minimal
    return { layer1: 12, layer2: 8, layer3: 5 };
  }
}

// Utility functions
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default FloatingElements;
