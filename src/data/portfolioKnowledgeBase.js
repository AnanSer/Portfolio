// ============================================
// PORTFOLIO KNOWLEDGE BASE
// ============================================
// This file contains all information about the portfolio
// Update this file to change assistant responses
// Future AI integration: Replace matcher logic, keep this data structure

export const knowledgeBase = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  about: {
    name: "Anan",
    title: "Full Stack & Mobile App Developer",
    description: "A passionate developer specializing in building modern web applications, backend systems, and mobile applications. Currently available for freelance, remote work, and full-time opportunities.",
    yearsOfExperience: "3+",
    currentStatus: "Open for Freelance, Remote, and Full-Time positions",
    location: "Ethiopia",
    bio: "I'm a Full Stack Developer with expertise in both frontend and backend technologies. I love creating elegant solutions to complex problems and building applications that make a difference."
  },

  // ============================================
  // EDUCATION & JOURNEY
  // ============================================
  education: {
    degree: "B.Sc. Software Engineering",
    university: "Haramaya University",
    year: "2022 - Present",
    additional: [
      {
        program: "ALX Professional Foundations",
        organization: "ALX Ethiopia",
        year: "2025",
        description: "Completed professional development program focusing on software engineering fundamentals"
      },
      {
        event: "Cursor AI Hackathon",
        organization: "Haramaya University",
        year: "2025",
        description: "Participated in AI-focused hackathon, building innovative solutions"
      }
    ]
  },

  // ============================================
  // WORK EXPERIENCE
  // ============================================
  experience: [
    {
      role: "Web Developer Intern",
      company: "Space Science and Geospatial Institute (SSGI)",
      year: "2025",
      responsibilities: [
        "Built responsive websites",
        "Added new features to existing applications",
        "Improved application performance",
        "Maintained web applications"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Web Development"]
    }
  ],

  // ============================================
  // PROJECTS
  // ============================================
  projects: [
    {
      name: "Food Order Application",
      description: "A full-stack food ordering platform with real-time order tracking, payment integration, and restaurant management system",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack Web",
      features: ["Real-time tracking", "Payment integration", "Admin dashboard", "Order management"]
    },
    {
      name: "Budget Tracker",
      description: "Personal finance management application with expense tracking, budget planning, and financial analytics",
      technologies: ["React", "JavaScript", "Chart.js", "Local Storage"],
      category: "Web Application",
      features: ["Expense tracking", "Budget planning", "Visual analytics", "Data export"]
    },
    {
      name: "Task Management System",
      description: "Collaborative task management platform with team features, deadline tracking, and progress visualization",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      category: "Full Stack Web",
      features: ["Team collaboration", "Deadline tracking", "Progress visualization", "Task prioritization"]
    },
    {
      name: "User Management System",
      description: "Complete user authentication and authorization system with role-based access control",
      technologies: ["React", "Node.js", "JWT", "MongoDB"],
      category: "Backend System",
      features: ["Authentication", "Authorization", "Role management", "Secure sessions"]
    }
  ],

  // ============================================
  // TECHNICAL SKILLS
  // ============================================
  skills: {
    frontend: {
      languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      frameworks: ["React", "Next.js", "Redux", "Tailwind CSS"],
      tools: ["Webpack", "Vite", "Git", "Figma"],
      description: "Expert in building responsive, performant, and accessible web applications"
    },
    backend: {
      languages: ["Node.js", "Python", "Java"],
      frameworks: ["Express.js", "Django", "Spring Boot"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Docker", "Nginx", "PM2"],
      description: "Experienced in building scalable backend systems and RESTful APIs"
    },
    mobile: {
      frameworks: ["React Native", "Flutter"],
      platforms: ["iOS", "Android"],
      capabilities: ["Cross-platform development", "Native features", "App deployment"],
      description: "Building native mobile applications for iOS and Android platforms"
    },
    devops: {
      tools: ["Git", "GitHub", "Docker", "CI/CD"],
      platforms: ["Netlify", "Vercel", "Heroku", "AWS"],
      practices: ["Version control", "Automated testing", "Deployment pipelines"]
    },
    other: {
      design: ["UI/UX Design", "Responsive Design", "Figma", "Adobe XD"],
      practices: ["Agile", "Scrum", "Test-Driven Development", "Clean Code"],
      soft: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
    }
  },

  // ============================================
  // SERVICES OFFERED
  // ============================================
  services: [
    {
      name: "Web Development",
      description: "Building responsive, high-performance websites and web applications using modern technologies",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      deliverables: ["Responsive design", "SEO optimization", "Performance tuning", "Cross-browser compatibility"]
    },
    {
      name: "Mobile App Development",
      description: "Creating native mobile applications for iOS and Android platforms",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      deliverables: ["Cross-platform apps", "Native features", "App store deployment", "Ongoing maintenance"]
    },
    {
      name: "Backend Development",
      description: "Developing robust backend systems, APIs, and database architectures",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      deliverables: ["RESTful APIs", "Database design", "Authentication", "Server deployment"]
    },
    {
      name: "Full Stack Solutions",
      description: "End-to-end application development from concept to deployment",
      technologies: ["MERN Stack", "PERN Stack", "Next.js", "TypeScript"],
      deliverables: ["Complete applications", "Frontend + Backend", "Database integration", "Cloud deployment"]
    },
    {
      name: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces",
      technologies: ["Figma", "Adobe XD", "Responsive Design"],
      deliverables: ["Wireframes", "Mockups", "Prototypes", "Design systems"]
    },
    {
      name: "Consulting & Code Review",
      description: "Technical consulting, code review, and architecture planning",
      technologies: ["All stacks"],
      deliverables: ["Code reviews", "Architecture planning", "Performance audits", "Best practices guidance"]
    }
  ],

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: "anan@example.com", // Update with real email
    phone: "+251-XXX-XXX-XXX", // Update with real phone
    location: "Ethiopia",
    availability: "Open for Freelance, Remote, and Full-Time opportunities",
    social: {
      github: "https://github.com/AnanSer",
      linkedin: "https://linkedin.com/in/anan-serbesa",
      twitter: "https://twitter.com/anan"
    },
    responseTime: "Usually responds within 24 hours",
    preferredContact: "Email or LinkedIn"
  },

  // ============================================
  // AVAILABILITY & WORK PREFERENCES
  // ============================================
  availability: {
    status: "Available",
    workTypes: ["Freelance", "Remote", "Full-Time"],
    projectTypes: ["Web Development", "Mobile Apps", "Backend Systems", "Full Stack Projects"],
    minProjectDuration: "1 week",
    maxProjectDuration: "Long-term",
    timezone: "East Africa Time (EAT)",
    hoursPerWeek: "40+ hours available"
  }
};

// ============================================
// QUESTION PATTERNS & RESPONSES
// ============================================
// This maps common question patterns to knowledge base sections
export const responsePatterns = [
  // ABOUT / INTRODUCTION
  {
    keywords: ["who are you", "about you", "tell me about", "introduce", "yourself", "who is anan"],
    response: (kb) => `👋 Hi! I'm ${kb.about.name}, a ${kb.about.title}. ${kb.about.bio}\n\nI have ${kb.about.yearsOfExperience} years of experience and I'm ${kb.about.currentStatus}.`
  },
  
  // EDUCATION
  {
    keywords: ["education", "degree", "university", "study", "studied", "school", "college"],
    response: (kb) => `🎓 Education:\n\n• ${kb.education.degree} at ${kb.education.university} (${kb.education.year})\n• ${kb.education.additional[0].program} at ${kb.education.additional[0].organization}\n• Participated in ${kb.education.additional[1].event} at ${kb.education.additional[1].organization}\n\nI'm continuously learning and improving my skills through various programs and challenges.`
  },

  // EXPERIENCE / INTERNSHIP
  {
    keywords: ["experience", "work", "job", "internship", "intern", "worked", "ssgi", "career"],
    response: (kb) => {
      const exp = kb.experience[0];
      return `💼 Work Experience:\n\n${exp.role} at ${exp.company} (${exp.year})\n\nResponsibilities:\n${exp.responsibilities.map(r => `• ${r}`).join('\n')}\n\nTechnologies used: ${exp.technologies.join(', ')}`;
    }
  },

  // PROJECTS
  {
    keywords: ["projects", "built", "portfolio", "work samples", "what have you built", "applications"],
    response: (kb) => `🚀 Featured Projects:\n\n${kb.projects.map((p, i) => `${i + 1}. ${p.name}\n   ${p.description}\n   Tech: ${p.technologies.slice(0, 3).join(', ')}`).join('\n\n')}\n\nI've built various web and mobile applications focusing on real-world problems and user experience.`
  },

  // SPECIFIC PROJECT
  {
    keywords: ["food order", "food app", "ordering"],
    response: (kb) => {
      const project = kb.projects.find(p => p.name.includes("Food Order"));
      return `🍔 ${project.name}:\n\n${project.description}\n\nKey Features:\n${project.features.map(f => `• ${f}`).join('\n')}\n\nTechnologies: ${project.technologies.join(', ')}`;
    }
  },

  {
    keywords: ["budget", "finance", "tracker"],
    response: (kb) => {
      const project = kb.projects.find(p => p.name.includes("Budget"));
      return `💰 ${project.name}:\n\n${project.description}\n\nKey Features:\n${project.features.map(f => `• ${f}`).join('\n')}\n\nTechnologies: ${project.technologies.join(', ')}`;
    }
  },

  {
    keywords: ["task management", "task", "project management"],
    response: (kb) => {
      const project = kb.projects.find(p => p.name.includes("Task"));
      return `✅ ${project.name}:\n\n${project.description}\n\nKey Features:\n${project.features.map(f => `• ${f}`).join('\n')}\n\nTechnologies: ${project.technologies.join(', ')}`;
    }
  },

  // SKILLS - FRONTEND
  {
    keywords: ["frontend", "front-end", "react", "javascript", "html", "css", "ui", "interface"],
    response: (kb) => `⚛️ Frontend Skills:\n\n${kb.skills.frontend.description}\n\nLanguages: ${kb.skills.frontend.languages.join(', ')}\n\nFrameworks & Libraries: ${kb.skills.frontend.frameworks.join(', ')}\n\nTools: ${kb.skills.frontend.tools.join(', ')}`
  },

  // SKILLS - BACKEND
  {
    keywords: ["backend", "back-end", "server", "api", "database", "node", "express"],
    response: (kb) => `🖥️ Backend Skills:\n\n${kb.skills.backend.description}\n\nLanguages: ${kb.skills.backend.languages.join(', ')}\n\nFrameworks: ${kb.skills.backend.frameworks.join(', ')}\n\nDatabases: ${kb.skills.backend.databases.join(', ')}\n\nTools: ${kb.skills.backend.tools.join(', ')}`
  },

  // SKILLS - MOBILE
  {
    keywords: ["mobile", "app", "ios", "android", "react native", "flutter", "mobile development"],
    response: (kb) => `📱 Mobile Development:\n\n${kb.skills.mobile.description}\n\nFrameworks: ${kb.skills.mobile.frameworks.join(', ')}\n\nPlatforms: ${kb.skills.mobile.platforms.join(', ')}\n\nCapabilities:\n${kb.skills.mobile.capabilities.map(c => `• ${c}`).join('\n')}`
  },

  // SKILLS - GENERAL
  {
    keywords: ["skills", "technologies", "tech stack", "tools", "what do you know", "programming languages"],
    response: (kb) => `🛠️ Technical Skills:\n\nFrontend: ${kb.skills.frontend.frameworks.slice(0, 3).join(', ')}\nBackend: ${kb.skills.backend.frameworks.slice(0, 3).join(', ')}\nMobile: ${kb.skills.mobile.frameworks.join(', ')}\nDatabases: ${kb.skills.backend.databases.slice(0, 3).join(', ')}\nDevOps: ${kb.skills.devops.tools.join(', ')}\n\nI'm proficient in both frontend and backend development with experience in mobile app development.`
  },

  // SERVICES
  {
    keywords: ["services", "offer", "provide", "do you do", "can you", "help with"],
    response: (kb) => `💼 Services I Offer:\n\n${kb.services.map((s, i) => `${i + 1}. ${s.name}\n   ${s.description}`).join('\n\n')}\n\nI provide end-to-end development solutions tailored to your needs.`
  },

  // WEB DEVELOPMENT SERVICE
  {
    keywords: ["web development", "website", "web app", "web application"],
    response: (kb) => {
      const service = kb.services.find(s => s.name.includes("Web Development"));
      return `🌐 ${service.name}:\n\n${service.description}\n\nTechnologies: ${service.technologies.join(', ')}\n\nDeliverables:\n${service.deliverables.map(d => `• ${d}`).join('\n')}`;
    }
  },

  // MOBILE SERVICE
  {
    keywords: ["build mobile", "create app", "mobile app development", "ios app", "android app"],
    response: (kb) => {
      const service = kb.services.find(s => s.name.includes("Mobile"));
      return `📱 ${service.name}:\n\n${service.description}\n\nTechnologies: ${service.technologies.join(', ')}\n\nDeliverables:\n${service.deliverables.map(d => `• ${d}`).join('\n')}`;
    }
  },

  // CONTACT
  {
    keywords: ["contact", "reach", "email", "phone", "get in touch", "hire", "message"],
    response: (kb) => `📧 Contact Information:\n\nEmail: ${kb.contact.email}\nLocation: ${kb.contact.location}\n\nAvailability: ${kb.contact.availability}\n\nSocial:\n• GitHub: ${kb.contact.social.github}\n• LinkedIn: ${kb.contact.social.linkedin}\n\n${kb.contact.responseTime}`
  },

  // AVAILABILITY
  {
    keywords: ["available", "hire", "freelance", "remote", "full-time", "work", "job"],
    response: (kb) => `✅ Availability:\n\nStatus: ${kb.availability.status}\n\nOpen for:\n${kb.availability.workTypes.map(t => `• ${t}`).join('\n')}\n\nProject types I work on:\n${kb.availability.projectTypes.map(t => `• ${t}`).join('\n')}\n\nI can commit ${kb.availability.hoursPerWeek} to projects. Let's discuss your needs!`
  },

  // LOCATION
  {
    keywords: ["where", "location", "based", "from", "country"],
    response: (kb) => `📍 I'm based in ${kb.contact.location}.\n\nI work remotely with clients globally and am open to both remote and on-site opportunities.`
  }
];

// ============================================
// FALLBACK RESPONSE
// ============================================
export const fallbackResponse = "I'm sorry, I only answer questions related to Anan's portfolio. You can ask about:\n\n• Experience and work history\n• Projects and applications\n• Technical skills and technologies\n• Services offered\n• Education and journey\n• Contact information\n\nTry asking something like 'Tell me about yourself' or 'What projects have you built?'";

// ============================================
// RESPONSE MATCHER
// ============================================
// This function finds the best matching response for a question
export const findBestMatch = (question) => {
  const lowerQuestion = question.toLowerCase().trim();
  
  // Check each response pattern
  for (const pattern of responsePatterns) {
    const hasMatch = pattern.keywords.some(keyword => 
      lowerQuestion.includes(keyword.toLowerCase())
    );
    
    if (hasMatch) {
      return pattern.response(knowledgeBase);
    }
  }
  
  // No match found
  return fallbackResponse;
};

// ============================================
// EXPORT FOR FUTURE AI INTEGRATION
// ============================================
// When integrating real AI:
// 1. Keep this knowledgeBase structure
// 2. Replace findBestMatch with AI API call
// 3. Send knowledgeBase as context to AI
// 4. Everything else remains the same

export default {
  knowledgeBase,
  responsePatterns,
  fallbackResponse,
  findBestMatch
};
