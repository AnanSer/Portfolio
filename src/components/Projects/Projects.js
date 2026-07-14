import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Projects.module.css";
import useCardTilt from "../../hooks/useCardTilt";
import useRippleEffect from "../../hooks/useRippleEffect";
import ProjectFocusPanel from "./ProjectFocusPanel";

// Project images
import BudgetTracker from "../../assets/images/budget tracker.png";
import Food_Order_App from "../../assets/images/food order.png";
import creative_design from "../../assets/images/creative-design.png";
import adduser from "../../assets/images/adduser.png";
import taskManagement from "../../assets/images/taskManagemnt.png";
import Food from "../../assets/images/food1.png";
import TrafficFine from "../../assets/images/Screenshot 2024-11-24 174536.png"; // Traffic Fine Management image
import LetterManagement from "../../assets/images/form-img.png"; // Letter Management image

const projects = [
  {
    title: "Digital Traffic Fine Management System (DTFMS)",
    description:
      "A full-stack traffic fine management platform serving four distinct user roles: Drivers, Vehicle Owners, Traffic Officers, and Supervisors. Implemented secure authentication and role-based dashboards controlling access to violation records and payment workflows.",
    image: TrafficFine,
    github: "https://github.com/AnanSer/DTFMS",
    liveDemo: "https://traffic-ease.vercel.app/",
    caseStudy: null,
    status: "Completed",
    technologies: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS"],
    caseStudyData: {
      problem: "Manual traffic fine management caused delays and inefficiencies across multiple user roles.",
      solution: ["Role-Based Auth", "Payment Gateway", "Violation Records", "Officer Dashboard", "Reporting System", "Real-time Updates"],
      role: "Full Stack Developer",
      duration: "4 Months",
      highlights: [
        "Secure authentication for 4 user roles",
        "Integrated payment workflows",
        "Built supervisor reporting module",
        "Scalable architecture design"
      ]
    }
  },
  {
    title: "Letter Management System",
    description:
      "A secure institutional system for creating, routing, approving, and archiving official letters and documents. Built role-based authentication and RESTful APIs to support multi-step organizational approval workflows, replacing manual paper-based tracking with a searchable digital record.",
    image: LetterManagement,
    github: "https://github.com/AnanSer/LetterManagement",
    liveDemo: "https://let-proj.vercel.app/",
    caseStudy: null,
    status: "Completed",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    caseStudyData: {
      problem: "Paper-based letter tracking was slow, unsearchable, and prone to loss.",
      solution: ["Document Creation", "Approval Workflows", "Digital Archive", "Role Management", "RESTful API", "Search System"],
      role: "MERN Stack Developer",
      duration: "3 Months",
      highlights: [
        "Multi-step approval workflows",
        "RESTful API architecture",
        "Searchable digital records",
        "Responsive interface design"
      ]
    }
  },
  {
    title: "Expense Tracker",
    description:
      "A dynamic web application that enables users to effortlessly track their expenses, manage budgets, and visualize their financial data in real-time for smarter financial management.",
    image: BudgetTracker,
    github: "https://github.com/AnanSer/Expense-Tracker",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["React", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Users needed an intuitive way to track expenses and manage personal budgets.",
      solution: ["Expense Tracking", "Budget Management", "Data Visualization", "Category System", "Real-time Updates", "Export Reports"],
      role: "Frontend Developer",
      duration: "2 Months",
      highlights: [
        "Real-time expense tracking",
        "Visual budget analytics",
        "Category-based organization",
        "Responsive design"
      ]
    }
  },
  {
    title: "Food Order App",
    description:
      "Designed to streamline the online ordering experience. This dynamic web application allows users to browse a variety of menu items, customize their orders, and easily manage their selections in real-time.",
    image: Food_Order_App,
    github: "https://github.com/AnanSer/Food_Order_App",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["React", "Firebase", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Customers needed a seamless way to browse menus and place orders online.",
      solution: ["Menu Browsing", "Cart Management", "Order Tracking", "Firebase Backend", "Real-time Updates", "Responsive UI"],
      role: "Full Stack Developer",
      duration: "2 Months",
      highlights: [
        "Real-time menu updates",
        "Cart management system",
        "Firebase integration",
        "Mobile-optimized interface"
      ]
    }
  },
  {
    title: "Creative Design",
    description:
      "Elevates the user experience through visually appealing elements and intuitive navigation.",
    image: creative_design,
    github: "https://github.com/AnanSer/Expense-Tracker",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Needed to create an engaging landing page with modern design patterns.",
      solution: ["Modern Layout", "CSS Animations", "Responsive Grid", "Interactive Elements", "Visual Hierarchy", "Performance"],
      role: "Frontend Developer",
      duration: "1 Month",
      highlights: [
        "Modern CSS techniques",
        "Smooth animations",
        "Responsive design",
        "Performance optimized"
      ]
    }
  },
  {
    title: "Food Website",
    description:
      "The design invites users to explore a diverse menu while ensuring easy navigation. Each element is thoughtfully arranged to guide users seamlessly.",
    image: Food,
    github: "https://github.com/AnanSer/food",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Restaurant needed an attractive online presence to showcase their menu.",
      solution: ["Menu Display", "Image Gallery", "Contact Form", "Responsive Layout", "Navigation System", "SEO Optimized"],
      role: "Frontend Developer",
      duration: "1 Month",
      highlights: [
        "Attractive menu presentation",
        "Easy navigation",
        "Mobile-friendly design",
        "Fast loading times"
      ]
    }
  },
  {
    title: "User Management System",
    description:
      "Implemented a seamless user registration and management system that enhances user experience by allowing individuals to easily create accounts, manage their profiles, and access personalized features within the application.",
    image: adduser,
    github: "https://github.com/AnanSer/UserFormInterface",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["React", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Applications needed a robust user registration and profile management system.",
      solution: ["User Registration", "Profile Management", "Form Validation", "State Management", "Data Persistence", "User Dashboard"],
      role: "Frontend Developer",
      duration: "1 Month",
      highlights: [
        "Seamless registration flow",
        "Profile management",
        "Form validation",
        "User-friendly interface"
      ]
    }
  },
  {
    title: "Task Management",
    description:
      "Developed a comprehensive task management application that enhances productivity by allowing users to create, prioritize, and track tasks seamlessly, fostering collaboration and efficient workflow through intuitive design and real-time updates.",
    image: taskManagement,
    github: "https://github.com/AnanSer/Styling-Task-Management-project",
    liveDemo: null,
    caseStudy: null,
    status: "Completed",
    technologies: ["React", "CSS", "JavaScript"],
    caseStudyData: {
      problem: "Teams needed an efficient way to organize, prioritize, and track their tasks.",
      solution: ["Task Creation", "Priority Levels", "Status Tracking", "Drag & Drop", "Task Categories", "Progress View"],
      role: "Frontend Developer",
      duration: "2 Months",
      highlights: [
        "Intuitive task creation",
        "Priority management",
        "Real-time updates",
        "Collaborative features"
      ]
    }
  },
];

// ProjectCard component - SIMPLIFIED (No expansion, just selection)
const ProjectCard = ({ project, index, currentIndex, isSelected, onSelect }) => {
  const tiltRef = useCardTilt(4);
  const createRipple = useRippleEffect();

  // Single unified selection handler
  const handleSelect = (e) => {
    // Don't select if clicking on external links (Live Demo, GitHub)
    if (e.target.closest('a')) {
      return;
    }
    e.stopPropagation();
    onSelect(index);
  };

  return (
    <article
      ref={tiltRef}
      className={`${styles['project-card']} ${
        index === currentIndex ? styles['active'] : ''
      } ${isSelected ? styles['selected'] : ''}`}
      onClick={handleSelect}
    >
      {/* Project Image */}
      <div className={styles['project-image-wrapper']}>
        <div className={styles['project-image']}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          <div className={styles['image-overlay']}></div>
        </div>
      </div>

      {/* Project Content */}
      <div className={styles['project-content']}>
        <h3 className={styles['project-title']}>{project.title}</h3>
        <p className={styles['project-description']}>{project.description}</p>

        {/* Technology Badges */}
        <div className={styles['tech-badges']} aria-label="Technologies used">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={styles['tech-badge']}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className={styles['project-actions']}>
          <button
            className={`${styles.btn} ${styles['btn-learn-more']}`}
            onClick={handleSelect}
            aria-label="View project details"
            data-cursor="pointer"
          >
            View Details
          </button>

          <a
            href={project.liveDemo || "#"}
            target={project.liveDemo ? "_blank" : "_self"}
            rel={project.liveDemo ? "noopener noreferrer" : ""}
            className={`${styles.btn} ${styles['btn-primary']} ${
              !project.liveDemo ? styles['btn-disabled'] : ''
            }`}
            onClick={(e) => {
              if (!project.liveDemo) {
                e.preventDefault();
              } else {
                createRipple(e);
              }
            }}
            aria-label={
              project.liveDemo
                ? `View ${project.title} live demo`
                : `Live demo for ${project.title} coming soon`
            }
            aria-disabled={!project.liveDemo}
            data-cursor="pointer"
          >
            <ExternalLink size={18} strokeWidth={2.5} />
            Live
          </a>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles['btn-secondary']}`}
            onClick={createRipple}
            aria-label={`View ${project.title} source code on GitHub`}
            data-cursor="pointer"
          >
            <Github size={18} strokeWidth={2.5} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Handle project selection
  const handleSelectProject = (index) => {
    setSelectedProject(projects[index]);
  };

  // Close focus panel
  const handleCloseFocusPanel = () => {
    setSelectedProject(null);
  };

  // Section visibility observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
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
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.disconnect();
      }
    };
  }, [isVisible]);

  // Calculate cards to show per view
  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cards per view on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const goToNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / projects.length;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevious = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / projects.length;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / projects.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  // Update current index based on scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cardWidth = carousel.scrollWidth / projects.length;
      const scrollPosition = carousel.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mouse drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = 'grab';
      }
    }
  };

  // Touch handling
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles['projects-section']} ${isVisible ? styles.visible : ''}`}
      aria-label="Projects showcase"
    >
      <div className={styles['section-header']}>
        <span className={styles.eyebrow}>Featured Work</span>
        <h2 className={styles['section-title']}>Projects That Solve Real Problems</h2>
        <p className={styles['section-subtitle']}>
          A collection of applications built with modern technologies focusing on
          performance, scalability, and user experience.
        </p>
      </div>

      <div className={`${styles['carousel-wrapper']}`}>
        <button
          className={`${styles['nav-button']} ${styles['nav-prev']}`}
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <div
          ref={carouselRef}
          className={styles['projects-carousel']}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              currentIndex={currentIndex}
              isSelected={selectedProject && projects.indexOf(selectedProject) === index}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

        <button
          className={`${styles['nav-button']} ${styles['nav-next']}`}
          onClick={goToNext}
          aria-label="Next project"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles['carousel-dots']}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles['dot-active'] : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>

      <div className={styles['nav-instructions']}>
        <span>← Previous</span>
        <span className={styles.divider}>•</span>
        <span>Drag or Swipe</span>
        <span className={styles.divider}>•</span>
        <span>Next →</span>
      </div>

      {/* Floating Focus Panel */}
      {selectedProject && (
        <ProjectFocusPanel 
          project={selectedProject} 
          onClose={handleCloseFocusPanel} 
        />
      )}
    </section>
  );
};

export default Projects;
