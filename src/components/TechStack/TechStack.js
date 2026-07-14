import React, { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Layers,
  Server,
  Database,
  Cloud,
  Container,
  GitBranch,
  Zap,
  Smartphone,
  Palette,
  Box,
  FileJson,
  Lock,
  Globe,
} from 'lucide-react';
import styles from './TechStack.module.css';

// Technology data with icons and categories
const technologies = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: Code2 },
  { name: 'Next.js', category: 'Framework', icon: Layers },
  { name: 'TypeScript', category: 'Frontend', icon: Code2 },
  { name: 'JavaScript', category: 'Frontend', icon: Code2 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette },
  { name: 'HTML5 & CSS3', category: 'Frontend', icon: Code2 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: Server },
  { name: 'Express', category: 'Backend', icon: Server },
  { name: 'REST API', category: 'API', icon: Zap },
  { name: 'GraphQL', category: 'API', icon: Globe },
  
  // Databases
  { name: 'MongoDB', category: 'Database', icon: Database },
  { name: 'MySQL', category: 'Database', icon: Database },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'Firebase', category: 'Cloud', icon: Cloud },
  
  // DevOps & Tools
  { name: 'Docker', category: 'DevOps', icon: Container },
  { name: 'Git', category: 'Version Control', icon: GitBranch },
  { name: 'AWS', category: 'Cloud', icon: Cloud },
  
  // Animation & UI
  { name: 'Framer Motion', category: 'Animation', icon: Layers },
  { name: 'Responsive Design', category: 'Frontend', icon: Smartphone },
  
  // Additional
  { name: 'Webpack', category: 'Build Tool', icon: Box },
  { name: 'JSON', category: 'API', icon: FileJson },
  { name: 'JWT', category: 'Security', icon: Lock },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Split technologies into two rows
  const midpoint = Math.ceil(technologies.length / 2);
  const row1Technologies = technologies.slice(0, midpoint);
  const row2Technologies = technologies.slice(midpoint);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [isVisible]);

  const renderTechCard = (tech, index) => {
    const Icon = tech.icon;
    return (
      <div
        key={`${tech.name}-${index}`}
        className={`${styles['tech-card']} ${styles[`category-${tech.category.toLowerCase().replace(/\s+/g, '-')}`]}`}
      >
        <div className={styles['card-content']}>
          <Icon className={styles['tech-icon']} size={20} strokeWidth={2.5} />
          <span className={styles['tech-name']}>{tech.name}</span>
        </div>
        <span className={styles['tech-category']}>{tech.category}</span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles['tech-stack-section']} ${isVisible ? styles.visible : ''}`}
      aria-label="Technology stack"
    >
      <div className={styles['section-header']}>
        <span className={styles['eyebrow']}>Technology I Work With</span>
        <h2 className={styles['section-title']}>Tech Stack</h2>
        <p className={styles['section-subtitle']}>
          Building scalable web applications with modern technologies.
        </p>
      </div>

      <div className={styles['marquee-container']}>
        {/* Row 1: Right to Left */}
        <div className={`${styles['marquee-row']} ${styles['row-1']}`}>
          <div className={styles['marquee-content']}>
            {row1Technologies.map(renderTechCard)}
            {/* Triple duplication for smoother infinite loop perception */}
            {row1Technologies.map((tech, index) => renderTechCard(tech, index + row1Technologies.length))}
            {row1Technologies.map((tech, index) => renderTechCard(tech, index + row1Technologies.length * 2))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className={`${styles['marquee-row']} ${styles['row-2']}`}>
          <div className={styles['marquee-content']}>
            {row2Technologies.map(renderTechCard)}
            {/* Triple duplication for smoother infinite loop perception */}
            {row2Technologies.map((tech, index) => renderTechCard(tech, index + row2Technologies.length))}
            {row2Technologies.map((tech, index) => renderTechCard(tech, index + row2Technologies.length * 2))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
