import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Home, User, Clock, Code, Briefcase, FolderKanban, MessageCircle, Sun, Moon, Download, Github, Linkedin, Bot, ExternalLink } from 'lucide-react';
import styles from './CommandPalette.module.css';

// Import projects data
const CommandPalette = ({ isOpen, onClose, projects = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  // Generate commands dynamically
  const generateCommands = useCallback(() => {
    const commands = [];

    // Navigation commands
    const navigationCommands = [
      { type: 'navigation', label: 'Go to Home', icon: Home, action: () => scrollToSection('home'), section: 'home' },
      { type: 'navigation', label: 'Go to About', icon: User, action: () => scrollToSection('about'), section: 'about' },
      { type: 'navigation', label: 'Go to Journey', icon: Clock, action: () => scrollToSection('journey'), section: 'journey' },
      { type: 'navigation', label: 'Go to Workspace', icon: Code, action: () => scrollToSection('dashboard'), section: 'dashboard' },
      { type: 'navigation', label: 'Go to Playground', icon: FolderKanban, action: () => scrollToSection('playground'), section: 'playground' },
      { type: 'navigation', label: 'Go to Services', icon: Briefcase, action: () => scrollToSection('services'), section: 'services' },
      { type: 'navigation', label: 'Go to Projects', icon: FolderKanban, action: () => scrollToSection('projects'), section: 'projects' },
      { type: 'navigation', label: 'Go to Testimonials', icon: MessageCircle, action: () => scrollToSection('testimonials'), section: 'testimonials' },
      { type: 'navigation', label: 'Go to Contact', icon: MessageCircle, action: () => scrollToSection('contact'), section: 'contact' },
    ];

    // Action commands
    const actionCommands = [
      { type: 'action', label: 'Toggle Theme', icon: Sun, action: () => toggleTheme(), description: 'Switch between light and dark mode' },
      { type: 'action', label: 'Download Resume', icon: Download, action: () => downloadResume(), description: 'Download CV as PDF' },
      { type: 'action', label: 'Open GitHub', icon: Github, action: () => window.open('https://github.com/AnanSer', '_blank'), description: 'View GitHub profile' },
      { type: 'action', label: 'Open LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/anan-serbesa', '_blank'), description: 'View LinkedIn profile' },
      { type: 'action', label: 'Open AI Assistant', icon: Bot, action: () => openAIAssistant(), description: 'Chat with portfolio assistant' },
    ];

    // Project commands (generated dynamically from projects array)
    const projectCommands = projects.map(project => ({
      type: 'project',
      label: project.title,
      icon: ExternalLink,
      action: () => openProject(project),
      description: project.description.substring(0, 60) + '...',
      technologies: project.technologies,
    }));

    return [...navigationCommands, ...actionCommands, ...projectCommands];
  }, [projects]);

  // Helper functions
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    onClose();
  };

  const downloadResume = () => {
    // Download the actual CV
    const link = document.createElement('a');
    link.href = require('../../assets/images/Anan_Serbesa_CV.pdf');
    link.download = 'Anan_Serbesa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  const openAIAssistant = () => {
    // Trigger AI Assistant (if it exists)
    const aiButton = document.querySelector('[data-ai-assistant]');
    if (aiButton) {
      aiButton.click();
    }
    onClose();
  };

  const openProject = (project) => {
    // Scroll to projects section and trigger project modal
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      // Small delay to allow scroll, then trigger project selection
      setTimeout(() => {
        // This would need to be connected to your project selection logic
        console.log('Open project:', project.title);
      }, 500);
    }
    onClose();
  };

  // Filter commands based on search query
  useEffect(() => {
    const commands = generateCommands();
    
    if (!searchQuery.trim()) {
      setFilteredCommands(commands);
      setSelectedIndex(0);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = commands.filter(cmd => {
      const labelMatch = cmd.label.toLowerCase().includes(query);
      const descriptionMatch = cmd.description?.toLowerCase().includes(query);
      const techMatch = cmd.technologies?.some(tech => tech.toLowerCase().includes(query));
      const typeMatch = cmd.type.toLowerCase().includes(query);
      
      return labelMatch || descriptionMatch || techMatch || typeMatch;
    });

    setFilteredCommands(filtered);
    setSelectedIndex(0);
  }, [searchQuery, generateCommands]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'Tab':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && filteredCommands.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedIndex, filteredCommands]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setSelectedIndex(0);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlay} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
    >
      <div 
        className={styles.palette} 
        onClick={(e) => e.stopPropagation()}
        role="search"
      >
        {/* Search Input */}
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} size={20} strokeWidth={2} />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search projects, services, sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search commands"
            aria-autocomplete="list"
            aria-controls="command-results"
            aria-activedescendant={`command-${selectedIndex}`}
          />
          <kbd className={styles.kbd}>ESC</kbd>
        </div>

        {/* Results */}
        <div 
          ref={resultsRef}
          className={styles.results}
          id="command-results"
          role="listbox"
        >
          {filteredCommands.length === 0 ? (
            <div className={styles.noResults}>
              <p>No results found</p>
              <span>Try searching for something else</span>
            </div>
          ) : (
            filteredCommands.map((command, index) => {
              const Icon = command.icon;
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={`${command.type}-${index}`}
                  id={`command-${index}`}
                  className={`${styles.commandItem} ${isSelected ? styles.selected : ''}`}
                  onClick={() => command.action()}
                  role="option"
                  aria-selected={isSelected}
                  style={{ animationDelay: `${Math.min(index * 0.02, 0.15)}s` }}
                >
                  <div className={styles.commandIcon}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div className={styles.commandContent}>
                    <span className={styles.commandLabel}>{command.label}</span>
                    {command.description && (
                      <span className={styles.commandDescription}>
                        {command.description}
                      </span>
                    )}
                    {command.technologies && (
                      <div className={styles.commandTech}>
                        {command.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={styles.commandType}>
                    <span className={styles.typeBadge}>{command.type}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerHints}>
            <span><kbd>↑↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
