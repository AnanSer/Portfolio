import React, { useEffect } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import styles from "./ProjectFocusPanel.module.css";
import useRippleEffect from "../../hooks/useRippleEffect";

const ProjectFocusPanel = ({ project, onClose }) => {
  const createRipple = useRippleEffect();

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.panel}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Project Image */}
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        {/* Project Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          {/* Technology Badges */}
          <div className={styles.techBadges}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          {/* Case Study Content */}
          <div className={styles.caseStudy}>
            {/* Problem */}
            <div className={styles.section}>
              <h4 className={styles.label}>Problem</h4>
              <p className={styles.text}>{project.caseStudyData.problem}</p>
            </div>

            {/* Solution */}
            <div className={styles.section}>
              <h4 className={styles.label}>Solution</h4>
              <div className={styles.solutionChips}>
                {project.caseStudyData.solution.map((feature, idx) => (
                  <span
                    key={idx}
                    className={styles.solutionChip}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Role & Duration */}
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <h4 className={styles.label}>Role</h4>
                <p className={styles.metaValue}>{project.caseStudyData.role}</p>
              </div>
              <div className={styles.metaItem}>
                <h4 className={styles.label}>Duration</h4>
                <p className={styles.metaValue}>{project.caseStudyData.duration}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className={styles.section}>
              <h4 className={styles.label}>Highlights</h4>
              <ul className={styles.highlights}>
                {project.caseStudyData.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className={styles.highlightItem}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    ✓ {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <a
              href={project.liveDemo || "#"}
              target={project.liveDemo ? "_blank" : "_self"}
              rel={project.liveDemo ? "noopener noreferrer" : ""}
              className={`${styles.btn} ${styles.btnPrimary} ${
                !project.liveDemo ? styles.btnDisabled : ""
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
            >
              <ExternalLink size={18} strokeWidth={2.5} />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={createRipple}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} strokeWidth={2.5} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFocusPanel;
