import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Code, MapPin, Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

const timelineData = [
  {
    id: 1,
    year: '2022',
    title: 'Started B.Sc. Software Engineering',
    organization: 'Haramaya University',
    type: 'education',
    icon: GraduationCap,
    description: null,
    responsibilities: null,
  },
  {
    id: 2,
    year: '2025',
    title: 'Web Developer Intern',
    organization: 'Space Science & Geospatial Institute (SSGI)',
    type: 'work',
    icon: Briefcase,
    description: null,
    responsibilities: null,
  },
  {
    id: 3,
    year: '2025',
    title: 'Completed ALX Professional Foundations',
    organization: 'ALX Ethiopia',
    type: 'education',
    icon: GraduationCap,
    description: null,
    responsibilities: null,
  },
  {
    id: 4,
    year: '2025',
    title: 'Participated in the Cursor AI Hackathon',
    organization: 'Haramaya University',
    type: 'education',
    icon: Code,
    description: null,
    responsibilities: null,
  },
  {
    id: 5,
    year: 'Today',
    title: 'Full Stack & Mobile App Developer',
    organization: 'Building modern applications',
    type: 'current',
    icon: Code,
    description: 'Building modern web applications, backend systems, and mobile applications.',
    responsibilities: [
      'Open for Freelance',
      'Open for Remote',
      'Open for Full-Time',
    ],
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const milestoneRefs = useRef([]);

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

  // Milestone staggered reveal
  useEffect(() => {
    if (!isVisible) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index, 10);
          setVisibleMilestones((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index].sort((a, b) => a - b);
            }
            return prev;
          });
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isVisible]);

  // Timeline line scroll animation
  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1)
      const scrollPosition = windowHeight - sectionTop;
      const progress = Math.min(
        Math.max(scrollPosition / (sectionHeight + windowHeight / 2), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'education';
      case 'work':
        return 'work';
      case 'certification':
        return 'certification';
      case 'current':
        return 'current';
      default:
        return 'default';
    }
  };

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={`${styles['timeline-section']} ${isVisible ? styles.visible : ''}`}
      aria-label="Professional Journey Timeline"
    >
      {/* Animated Background */}
      <div className={styles['background-wrapper']}>
        <div className={styles['grid-pattern']}></div>
        <div className={styles['gradient-blob-1']}></div>
        <div className={styles['gradient-blob-2']}></div>
      </div>

      {/* Section Header */}
      <div className={styles['section-header']}>
        <span className={styles.eyebrow}>My Journey</span>
        <h2 className={styles['section-title']}>Professional Journey</h2>
        <p className={styles['section-subtitle']}>
          A timeline of my education, certifications, and professional experiences
          in software development.
        </p>
      </div>

      {/* Timeline Container */}
      <div className={styles['timeline-container']}>
        {/* Animated Timeline Line */}
        <div className={styles['timeline-line']}>
          <div
            className={styles['timeline-progress']}
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Timeline Milestones */}
        <div className={styles['timeline-content']}>
          {timelineData.map((milestone, index) => {
            const Icon = milestone.icon;
            const isVisible = visibleMilestones.includes(index);
            const isActive = activeIndex === index;
            const typeColor = getTypeColor(milestone.type);

            return (
              <div
                key={milestone.id}
                ref={(el) => (milestoneRefs.current[index] = el)}
                data-index={index}
                className={`${styles['milestone']} ${
                  isVisible ? styles['milestone-visible'] : ''
                } ${isActive ? styles['milestone-active'] : ''}`}
                style={{ '--delay': `${index * 150}ms` }}
              >
                {/* Milestone Dot */}
                <div className={`${styles['milestone-dot']} ${styles[typeColor]}`}>
                  <div className={styles['dot-inner']}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <div className={styles['dot-ring']}></div>
                  <div className={styles['dot-pulse']}></div>
                </div>

                {/* Milestone Card */}
                <div className={styles['milestone-card']}>
                  {/* Card Glow Effect */}
                  <div className={styles['card-glow']}></div>

                  {/* Year Badge */}
                  <div className={`${styles['year-badge']} ${styles[typeColor]}`}>
                    <Calendar size={14} strokeWidth={2.5} />
                    <span>{milestone.year}</span>
                  </div>

                  {/* Card Content */}
                  <div className={styles['card-content']}>
                    <h3 className={styles['milestone-title']}>{milestone.title}</h3>
                    
                    <div className={styles['milestone-organization']}>
                      <MapPin size={16} strokeWidth={2} />
                      <span>{milestone.organization}</span>
                    </div>

                    {milestone.description && (
                      <p className={styles['milestone-description']}>
                        {milestone.description}
                      </p>
                    )}

                    {milestone.responsibilities && (
                      <ul className={styles['responsibilities-list']}>
                        {milestone.responsibilities.map((item, idx) => (
                          <li key={idx} className={styles['responsibility-item']}>
                            <span className={styles['bullet']}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Hover Border Animation */}
                  <div className={styles['animated-border']}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
