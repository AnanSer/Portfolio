import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Testimonials.module.css';

// ============================================
// TESTIMONIALS DATA
// ============================================
// NOTE: Replace with real testimonials when available
// These are placeholder examples to demonstrate the component structure

const testimonialsData = [
  {
    id: 1,
    name: "Abreham Lema",
    role: "Project Manager",
    organization: "Tech Solutions Inc",
    quote: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: null // Replace with actual avatar URL when available
  },
  {
    id: 2,
    name: "Yohanis Samuel",
    role: "CTO",
    organization: "Digital Innovations",
    quote: "Exceptional technical skills combined with great communication. The project was delivered on time and the code quality was outstanding. Would definitely work together again.",
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: "Tesfaye Fufa",
    role: "Product Designer",
    organization: "Creative Studio",
    quote: "A talented developer who truly understands both design and development. The collaboration was seamless and the final product was exactly what we envisioned.",
    rating: 5,
    avatar: null
  },
  {
    id: 4,
    name: "Amanuel Kebede",
    role: "Lead Developer",
    organization: "Startup Hub",
    quote: "Impressive problem-solving skills and a strong work ethic. The solutions provided were innovative and well-documented. A valuable team member on any project.",
    rating: 5,
    avatar: null
  }
];

// ============================================
// QUOTE ICON COMPONENT
// ============================================
const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C12 20.6863 14.6863 18 18 18V12C11.3726 12 6 17.3726 6 24V36H18V24H12Z" fill="currentColor" opacity="0.2"/>
    <path d="M30 24C30 20.6863 32.6863 18 36 18V12C29.3726 12 24 17.3726 24 24V36H36V24H30Z" fill="currentColor" opacity="0.2"/>
  </svg>
);

// ============================================
// STAR RATING COMPONENT
// ============================================
const StarRating = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.5L12.5 7L18.5 7.75L14.25 11.75L15.5 17.5L10 14.5L4.5 17.5L5.75 11.75L1.5 7.75L7.5 7L10 1.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
};

// ============================================
// AVATAR COMPONENT
// ============================================
const Avatar = ({ name, avatar }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={styles.avatar}>
      {avatar ? (
        <img src={avatar} alt={name} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarPlaceholder}>
          <span>{initials}</span>
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN TESTIMONIALS COMPONENT
// ============================================
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);

  // ============================================
  // SCROLL REVEAL ANIMATION
  // ============================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ============================================
  // NAVIGATION FUNCTIONS
  // ============================================
  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  // ============================================
  // AUTOPLAY FUNCTIONALITY
  // ============================================
  useEffect(() => {
    if (!isPaused && isVisible) {
      autoplayRef.current = setInterval(() => {
        goToNext();
      }, 6000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, isVisible, goToNext]);

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // ============================================
  // TOUCH SWIPE HANDLERS
  // ============================================
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // ============================================
  // RENDER
  // ============================================
  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.testimonialsSection} ${isVisible ? styles.visible : ''}`}
      id="testimonials"
      aria-label="Testimonials"
    >
      {/* Animated Background */}
      <div className={styles.backgroundWrapper}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientBlob1}></div>
        <div className={styles.gradientBlob2}></div>
      </div>

      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>What People Say</span>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.sectionSubtitle}>
          Feedback from people I've worked and collaborated with.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div 
        className={styles.carouselContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Arrow - Previous */}
        <button
          className={`${styles.navArrow} ${styles.navArrowPrev}`}
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className={styles.cardWrapper}>
          <div 
            className={`${styles.testimonialCard} ${styles[`slide-${direction}`]}`}
            key={currentTestimonial.id}
          >
            {/* Card Glow Effect */}
            <div className={styles.cardGlow}></div>
            
            {/* Quote Icon */}
            <div className={styles.quoteIcon}>
              <QuoteIcon />
            </div>

            {/* Quote Text */}
            <blockquote className={styles.quote}>
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Rating */}
            <StarRating rating={currentTestimonial.rating} />

            {/* Reviewer Info */}
            <div className={styles.reviewerInfo}>
              <Avatar name={currentTestimonial.name} avatar={currentTestimonial.avatar} />
              <div className={styles.reviewerDetails}>
                <h3 className={styles.reviewerName}>{currentTestimonial.name}</h3>
                <p className={styles.reviewerRole}>
                  {currentTestimonial.role}
                  <span className={styles.separator}>•</span>
                  {currentTestimonial.organization}
                </p>
              </div>
            </div>

            {/* Animated Border */}
            <div className={styles.animatedBorder}></div>
          </div>
        </div>

        {/* Navigation Arrow - Next */}
        <button
          className={`${styles.navArrow} ${styles.navArrowNext}`}
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination} role="tablist" aria-label="Testimonial navigation">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
