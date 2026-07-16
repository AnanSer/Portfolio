import { useState, useEffect, useRef } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 4, suffix: '+', label: 'Years Experience' },
    { value: 0, target: 10, suffix: '+', label: 'Projects Shipped' },
    { value: 0, target: 3, suffix: '+', label: 'Companies Served' },
  ]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, [hasAnimated]);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCounters = () => {
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value: Math.floor(stat.target * easedProgress),
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className={styles.statistics} ref={statsRef}>
      {stats.map((stat, index) => (
        <div key={index} className={styles['stat-card']}>
          <div className={styles['stat-number']}>
            {stat.value}
            {stat.value === stat.target && stat.suffix}
          </div>
          <div className={styles['stat-label']}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
