import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Smartphone, Database, ArrowRight } from "lucide-react";
import styles from "./service.module.css";
import useCardTilt from "../../hooks/useCardTilt";

const services = [
  {
    number: "01",
    icon: Code,
    title: "Full Stack Web Development",
    description:
      "Building scalable, high-performance web applications from concept to deployment. Crafting responsive interfaces and robust server architectures with modern frameworks and best practices.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Transforming complex challenges into elegant, user-centered digital experiences. Creating intuitive interfaces that seamlessly blend aesthetics with functionality.",
    technologies: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Designing and developing intuitive mobile applications that enhance user experiences across platforms. Delivering engaging apps aligned with your brand's vision and goals.",
    technologies: ["React Native", "Flutter", "Firebase", "Android", "iOS", "REST API"],
  },
  {
    number: "04",
    icon: Database,
    title: "Backend & API Development",
    description:
      "Engineering secure, scalable server-side solutions and RESTful APIs. Building reliable data architectures with modern authentication and deployment practices.",
    technologies: ["Node.js", "Express", "JWT", "REST API", "MySQL", "MongoDB", "Docker"],
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0); // First card expanded by default
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

  // Mouse position tracking for spotlight effect
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Handle card click to expand/collapse
  const handleCardClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`${styles['services-section']} ${isVisible ? styles.visible : ''}`}
      aria-label="Services offered"
    >
      {/* Animated Background */}
      <div className={styles['background-wrapper']}>
        <div className={styles['grid-pattern']}></div>
        <div className={styles['gradient-blob-1']}></div>
        <div className={styles['gradient-blob-2']}></div>
      </div>

      {/* Section Header */}
      <div className={styles['section-header']}>
        <span className={styles.eyebrow}>What I Offer</span>
        <h2 className={styles['section-title']}>Services</h2>
        <p className={styles['section-subtitle']}>
          Comprehensive development solutions from design to deployment
        </p>
      </div>

      {/* Services Row - Expandable Cards */}
      <div className={styles['services-row']}>
        {services.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = expandedIndex === index;
          const isCollapsed = expandedIndex !== null && expandedIndex !== index;

          return (
            <article
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${styles['service-card']} ${
                isVisible ? styles['card-visible'] : ''
              } ${isExpanded ? styles['card-expanded'] : ''} ${
                isCollapsed ? styles['card-collapsed'] : ''
              }`}
              style={{ '--delay': `${index * 120}ms` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={() => handleCardClick(index)}
              aria-labelledby={`service-title-${index}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
            >
              {/* Spotlight effect */}
              <div className={styles['card-spotlight']}></div>

              {/* Service Number */}
              <span className={styles['service-number']} aria-hidden="true">
                {service.number}
              </span>

              {/* Service Icon */}
              <div className={styles['service-icon']} aria-hidden="true">
                <Icon size={isExpanded ? 36 : 28} strokeWidth={1.5} />
              </div>

              {/* Service Content */}
              <div className={styles['service-content']}>
                <h3
                  id={`service-title-${index}`}
                  className={styles['service-title']}
                >
                  {service.title}
                </h3>

                {/* Expandable Content */}
                <div className={styles['expandable-content']}>
                  <p className={styles['service-description']}>
                    {service.description}
                  </p>

                  {/* Technology Badges */}
                  <div className={styles['tech-badges']} aria-label="Technologies">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={styles['tech-badge']}
                        style={{ '--tech-delay': `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Workflow Link */}
                  <a
                    href="#services"
                    className={styles['workflow-link']}
                    aria-label={`View ${service.title} workflow`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>View Workflow</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Instruction hint */}
      <p className={styles['interaction-hint']}>Click on a card to expand</p>
    </section>
  );
};

export default Services;
