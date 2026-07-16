import React, { useEffect, useRef, useState } from 'react';
import styles from './DeveloperDashboard.module.css';

const DeveloperDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFile, setSelectedFile] = useState('README.md');
  const [expandedFolders, setExpandedFolders] = useState(['Projects']);
  const [isVisible, setIsVisible] = useState(false);
  const [readmeAnimated, setReadmeAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Trigger README animation only once
  useEffect(() => {
    if (isExpanded && selectedFile === 'README.md' && !readmeAnimated) {
      setReadmeAnimated(true);
    }
  }, [isExpanded, selectedFile, readmeAnimated]);

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const fileStructure = [
    { name: 'README.md', type: 'file', icon: '📄' },
    { name: 'Experience.json', type: 'file', icon: '💼' },
    {
      name: 'Projects',
      type: 'folder',
      icon: '📁',
      children: [
        { name: 'Traffic Fine Management', type: 'file', icon: '🚦' },
        { name: 'Letter Management System', type: 'file', icon: '📨' },
        { name: 'Food Order App', type: 'file', icon: '🍔' },
        { name: 'Budget Tracker', type: 'file', icon: '💰' },
        { name: 'Task Management', type: 'file', icon: '✅' },
        { name: 'Portfolio Website', type: 'file', icon: '🌐' }
      ]
    },
    { name: 'TechStack.config', type: 'file', icon: '⚙️' },
    { name: 'Services.ts', type: 'file', icon: '🛠️' },
    { name: 'CurrentlyLearning.md', type: 'file', icon: '📚' },
    { name: 'Contact.env', type: 'file', icon: '📧' },
    { name: 'AIAssistant.js', type: 'file', icon: '🤖' }
  ];

  const fileContents = {
    'README.md': {
      title: 'README.md',
      content: (
        <div className={`${styles.readmeContent} ${readmeAnimated ? styles.animated : ''}`}>
          <h3 className={styles.fadeInTitle}>👋 Hello, I'm Anan Serbesa</h3>
          <p className={styles.slideUpPara}>
            A passionate Full Stack Developer specializing in building modern web and mobile applications.
            I transform ideas into scalable, user-friendly digital experiences.
          </p>
          <div className={`${styles.statusBadge} ${styles.scaleBadge}`}>
            <span className={styles.statusDot}>🟢</span>
            <span>Available for Work</span>
          </div>
          <h4 className={styles.fadeInTitle}>🎯 Current Focus</h4>
          <p className={styles.slideUpPara}>Building scalable Full Stack Web & Mobile Applications using modern technologies.</p>
          <h4 className={styles.fadeInTitle}>💼 Preferred Roles</h4>
          <ul className={styles.rolesList}>
            <li className={styles.roleItem} style={{ animationDelay: '0.1s' }}>Full Stack Engineer</li>
            <li className={styles.roleItem} style={{ animationDelay: '0.2s' }}>Frontend Developer</li>
            <li className={styles.roleItem} style={{ animationDelay: '0.3s' }}>Backend Developer</li>
            <li className={styles.roleItem} style={{ animationDelay: '0.4s' }}>App Developer</li>
          </ul>
        </div>
      )
    },
    'Experience.json': {
      title: 'Experience.json',
      content: (
        <pre className={styles.jsonContent}>
          <div className={styles.jsonLine} style={{ animationDelay: '0s' }}>{'{'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.05s' }}>{'  "internship": {'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.1s' }}>{'    "company": "SSGI",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.15s' }}>{'    "position": "Full Stack Developer Intern",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.2s' }}>{'    "year": "2025",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.25s' }}>{'    "duration": "6 months",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.3s' }}>{'    "responsibilities": ['}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.35s' }}>{'      "Developed web applications using React & Node.js",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.4s' }}>{'      "Collaborated with team on full-stack projects",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.45s' }}>{'      "Implemented responsive UI components",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.5s' }}>{'      "Worked with REST APIs and databases"'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.55s' }}>{'    ],'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.6s' }}>{'    "technologies": ["React", "Node.js", "MongoDB", "Express"]'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.65s' }}>{'  },'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.7s' }}>{'  "education": {'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.75s' }}>{'    "degree": "B.Sc. in Computer Science",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.8s' }}>{'    "university": "Haramaya University",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.85s' }}>{'    "year": "2022",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.9s' }}>{'    "focus": "Software Engineering"'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '0.95s' }}>{'  },'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '1s' }}>{'  "achievements": ['}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '1.05s' }}>{'    "ALX Software Engineering Foundations (2025)",'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '1.1s' }}>{'    "Cursor AI Hackathon Participant (2025)"'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '1.15s' }}>{'  ]'}</div>
          <div className={styles.jsonLine} style={{ animationDelay: '1.2s' }}>{'}'}</div>
        </pre>
      )
    },
    'Traffic Fine Management': {
      title: 'Traffic Fine Management',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>🚦</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>🚦 Digital Traffic Fine Management System (DTFMS)</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
              <span className={styles.badge}>🔐 Role-Based Auth</span>
            </div>
            <p><strong>Overview:</strong> A full-stack traffic fine management platform serving four distinct user roles: Drivers, Vehicle Owners, Traffic Officers, and Supervisors.</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Supabase</span>
              <span>Tailwind CSS</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Secure authentication and role-based dashboards</li>
              <li>Violation records and payment workflows</li>
              <li>Reporting module for supervisors</li>
              <li>Scalable architecture for multiple roles</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://traffic-ease.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>View Live Demo</a>
              <a href="#projects" className={styles.linkBtn}>More Details</a>
            </div>
          </div>
        </div>
      )
    },
    'Letter Management System': {
      title: 'Letter Management System',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>📨</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>📨 Letter Management System</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
              <span className={styles.badge}>🔒 Secure</span>
            </div>
            <p><strong>Overview:</strong> A secure institutional system for creating, routing, approving, and archiving official letters and documents.</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Role-based authentication and RESTful APIs</li>
              <li>Multi-step organizational approval workflows</li>
              <li>Responsive interfaces replacing paper-based tracking</li>
              <li>Searchable digital record system</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://let-proj.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>View Live Demo</a>
              <a href="#projects" className={styles.linkBtn}>More Details</a>
            </div>
          </div>
        </div>
      )
    },
    'Food Order App': {
      title: 'Food Order App',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>🍔</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>🍔 Food Order App</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
            </div>
            <p><strong>Overview:</strong> A full-featured food ordering platform with cart management and order tracking.</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Real-time menu browsing</li>
              <li>Cart management</li>
              <li>Order tracking</li>
              <li>Responsive design</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="#projects" className={styles.linkBtn}>View Demo</a>
              <a href="#projects" className={styles.linkBtn}>GitHub</a>
            </div>
          </div>
        </div>
      )
    },
    'Budget Tracker': {
      title: 'Budget Tracker',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>💰</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>💰 Budget Tracker</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
            </div>
            <p><strong>Overview:</strong> Personal finance management app for tracking income and expenses.</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Chart.js</span>
              <span>Local Storage</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Income & expense tracking</li>
              <li>Visual charts and analytics</li>
              <li>Budget categories</li>
              <li>Export reports</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="#projects" className={styles.linkBtn}>View Demo</a>
              <a href="#projects" className={styles.linkBtn}>GitHub</a>
            </div>
          </div>
        </div>
      )
    },
    'Task Management': {
      title: 'Task Management',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>✅</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>✅ Task Management System</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
            </div>
            <p><strong>Overview:</strong> Productivity tool for managing tasks, projects, and deadlines.</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Create and organize tasks</li>
              <li>Priority levels</li>
              <li>Due date reminders</li>
              <li>Progress tracking</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="#projects" className={styles.linkBtn}>View Demo</a>
              <a href="#projects" className={styles.linkBtn}>GitHub</a>
            </div>
          </div>
        </div>
      )
    },
    'Portfolio Website': {
      title: 'Portfolio Website',
      content: (
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>🌐</div>
          </div>
          <div className={styles.projectInfo}>
            <h4>🌐 Portfolio Website</h4>
            <div className={styles.projectBadges}>
              <span className={styles.badge}>✅ Responsive</span>
              <span className={styles.badge}>🚀 Live</span>
            </div>
            <p><strong>Overview:</strong> This premium portfolio website you're viewing right now!</p>
            <p><strong>Tech Stack:</strong></p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>CSS Modules</span>
              <span>Intersection Observer</span>
            </div>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Interactive Developer Workspace</li>
              <li>AI Portfolio Assistant</li>
              <li>Professional Timeline</li>
              <li>Premium animations</li>
              <li>Fully responsive</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="#home" className={styles.linkBtn}>You're Here!</a>
            </div>
          </div>
        </div>
      )
    },
    'TechStack.config': {
      title: 'TechStack.config',
      content: (
        <pre className={styles.configContent}>
{`// Primary Technology Stack

Frontend {
  frameworks: ["React", "Next.js"],
  styling: ["CSS3", "Tailwind CSS", "Material-UI"],
  stateManagement: ["Context API", "Redux"]
}

Backend {
  runtime: ["Node.js"],
  frameworks: ["Express.js"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  authentication: ["JWT", "OAuth"]
}

Mobile {
  framework: ["React Native", "Flutter"],
  tools: ["Expo"]
}

Tools & DevOps {
  versionControl: ["Git", "GitHub"],
  editors: ["VS Code"],
  deployment: ["Netlify", "Vercel"],
  testing: ["Jest"]
}

Languages {
  primary: ["JavaScript", "TypeScript"],
  styling: ["HTML5", "CSS3"],
  backend: ["Node.js"]
}`}
        </pre>
      )
    },
    'Services.ts': {
      title: 'Services.ts',
      content: (
        <pre className={styles.tsContent}>
{`interface Service {
  name: string;
  description: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    name: "Web Development",
    description: "Building responsive, modern web applications with React, Next.js, and Node.js. From landing pages to full-stack applications.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"]
  },
  {
    name: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native. Native performance with shared codebase.",
    technologies: ["React Native", "Expo", "JavaScript"]
  },
  {
    name: "Backend Development",
    description: "Developing robust APIs and server-side applications. RESTful services, database design, and authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "MySQL"]
  },
  {
    name: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive interfaces. Focus on user experience and accessibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  }
];`}
        </pre>
      )
    },
    'CurrentlyLearning.md': {
      title: 'CurrentlyLearning.md',
      content: (
        <div className={styles.learningContent}>
          <h3>📚 Currently Learning</h3>
          <p>Technologies and concepts I'm actively improving:</p>
          <div className={styles.learningItem}>
            <h4>⚡ Advanced Next.js</h4>
            <p>Server-side rendering, API routes, and optimization techniques</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className={styles.learningItem}>
            <h4>📘 TypeScript</h4>
            <p>Type safety, interfaces, and advanced TypeScript patterns</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className={styles.learningItem}>
            <h4>🐳 Docker</h4>
            <p>Containerization, Docker Compose, and deployment workflows</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className={styles.learningItem}>
            <h4>🏗️ System Design</h4>
            <p>Scalable architecture, design patterns, and best practices</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '55%' }}></div>
            </div>
          </div>
          <div className={styles.learningItem}>
            <h4>📱 Mobile App Development</h4>
            <p>Advanced React Native, native modules, and performance optimization</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    'Contact.env': {
      title: 'Contact.env',
      content: (
        <pre className={styles.envContent}>
{`# Contact Information

EMAIL=ananserbesa@gmail.com
PHONE=+251 912 345 678
LOCATION=Addis Ababa, Ethiopia

# Availability
STATUS=Available for Work
RESPONSE_TIME=Usually within 24 hours

# Social Links
GITHUB=github.com/ananserbesa
LINKEDIN=linkedin.com/in/anan-serbesa

# Preferred Communication
PRIMARY=Email
SECONDARY=Phone

# Time Zone
TIMEZONE=EAT (UTC+3)
WORK_HOURS=9:00 AM - 6:00 PM EAT`}
        </pre>
      )
    },
    'AIAssistant.js': {
      title: 'AIAssistant.js',
      content: (
        <div className={styles.aiContent}>
          <h3>🤖 AI Portfolio Assistant</h3>
          <p>
            I've built a custom AI assistant to help you explore my portfolio more efficiently.
            It's powered by a local knowledge base—no external APIs required.
          </p>
          <h4>✨ Features</h4>
          <ul>
            <li>Instant answers about my projects, skills, and experience</li>
            <li>Quick access to my resume, GitHub, and LinkedIn</li>
            <li>Available 24/7 from any page</li>
            <li>Privacy-focused: All processing happens locally</li>
          </ul>
          <h4>💬 How to Use</h4>
          <p>
            Look for the <strong>"Ask Anan"</strong> floating button in the bottom-right corner.
            Click it to open the chat window and ask me anything!
          </p>
          <div className={styles.aiExample}>
            <p><strong>Try asking:</strong></p>
            <ul>
              <li>"Tell me about yourself"</li>
              <li>"What projects have you built?"</li>
              <li>"What's your tech stack?"</li>
              <li>"How can I contact you?"</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  const renderFileTree = (items, depth = 0) => {
    return items.map((item, index) => {
      if (item.type === 'folder') {
        const isExpanded = expandedFolders.includes(item.name);
        return (
          <div key={index}>
            <div
              className={`${styles.fileItem} ${styles.folder}`}
              style={{ paddingLeft: `${depth * 20 + 12}px` }}
              onClick={() => toggleFolder(item.name)}
            >
              <span className={`${styles.expandIcon} ${isExpanded ? styles.rotated : ''}`}>▶</span>
              <span className={styles.fileIcon}>{isExpanded ? '📂' : '📁'}</span>
              <span className={styles.fileName}>{item.name}</span>
            </div>
            {isExpanded && (
              <div className={styles.folderContents}>
                {renderFileTree(item.children, depth + 1)}
              </div>
            )}
          </div>
        );
      }
      return (
        <div
          key={index}
          className={`${styles.fileItem} ${
            selectedFile === item.name ? styles.selected : ''
          }`}
          style={{ paddingLeft: `${depth * 20 + 32}px` }}
          onClick={() => setSelectedFile(item.name)}
        >
          <span className={styles.fileIcon}>{item.icon}</span>
          <span className={styles.fileName}>{item.name}</span>
        </div>
      );
    });
  };

  const currentContent = fileContents[selectedFile];

  return (
    <section
      ref={sectionRef}
      className={`${styles.workspaceSection} ${isVisible ? styles.visible : ''} ${
        isExpanded ? styles.expanded : ''
      }`}
      id="dashboard"
      aria-label="Developer Workspace"
    >
      {/* Collapsed Header */}
      <div className={styles.collapsedHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.headerLeft}>
          <span className={styles.folderIcon}>📂</span>
          <div className={styles.headerText}>
            <h2 className={styles.headerTitle}>Developer Workspace</h2>
            <p className={styles.headerSubtitle}>Explore how I work</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.onlineStatus}>
            <span className={styles.onlineDot}></span>
            Online
          </span>
          <span className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ''}`}>
            {isExpanded ? '▲' : '▼'}
          </span>
        </div>
      </div>

      {/* Expanded Workspace */}
      <div className={styles.workspaceContent}>
        <div className={styles.workspaceContainer}>
          {/* File Explorer */}
          <div className={styles.explorer}>
            <div className={styles.explorerHeader}>
              <span className={styles.explorerTitle}>EXPLORER</span>
              <div className={styles.terminalDots}>
                <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                <span className={styles.dot} style={{ background: '#27c93f' }}></span>
              </div>
            </div>
            <div className={styles.fileTree}>
              <div className={styles.rootFolder}>
                <span className={styles.folderIcon}>📁</span>
                <span className={styles.rootName}>Portfolio</span>
              </div>
              {renderFileTree(fileStructure)}
            </div>
          </div>

          {/* Content Viewer */}
          <div className={styles.contentViewer}>
            <div className={styles.contentHeader}>
              <div className={styles.contentTab}>
                <span className={styles.tabIcon}>
                  {fileStructure.find((f) => f.name === selectedFile)?.icon ||
                    fileStructure
                      .find((f) => f.type === 'folder')
                      ?.children?.find((c) => c.name === selectedFile)?.icon ||
                    '📄'}
                </span>
                <span className={styles.tabName}>{currentContent?.title || selectedFile}</span>
              </div>
            </div>
            <div className={styles.contentBody} key={selectedFile}>
              {currentContent?.content || <p>File not found</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDashboard;
