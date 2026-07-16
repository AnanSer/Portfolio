import About from "./components/About/About";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Services from "./components/Services/Services";
import Timeline from "./components/Timeline/Timeline";
import DeveloperDashboard from "./components/DeveloperDashboard/DeveloperDashboard";
import DeveloperPlayground from "./components/DeveloperPlayground/DeveloperPlayground";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import ContactPage from "./components/Contact-form/ContactForm";
import Footer from "./components/Footer/Footer";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import CommandPaletteButton from "./components/CommandPalette/CommandPaletteButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import PremiumCursor from "./components/UI/PremiumCursor";
import ScrollProgress from "./components/UI/ScrollProgress";
import ScrollToTop from "./components/UI/ScrollToTop";
import "./styles/ripple.css";
import "./styles/micro-interactions.css";
import { useState, useEffect } from "react";

// Import projects data for Command Palette
import BudgetTracker from "./assets/images/budget tracker.png";
import Food_Order_App from "./assets/images/food order.png";
import creative_design from "./assets/images/creative-design.png";
import adduser from "./assets/images/adduser.png";
import taskManagement from "./assets/images/taskManagemnt.png";
import Food from "./assets/images/food1.png";
import TrafficFine from "./assets/images/Screenshot 2024-11-24 174536.png";
import LetterManagement from "./assets/images/form-img.png";

// Projects data (shared with Projects component and Command Palette)
const projectsData = [
  {
    title: "Digital Traffic Fine Management System (DTFMS)",
    description: "A full-stack traffic fine management platform serving four distinct user roles: Drivers, Vehicle Owners, Traffic Officers, and Supervisors.",
    image: TrafficFine,
    github: "https://github.com/AnanSer/DTFMS",
    liveDemo: "https://traffic-ease.vercel.app/",
    technologies: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Letter Management System",
    description: "A secure institutional system for creating, routing, approving, and archiving official letters and documents.",
    image: LetterManagement,
    github: "https://github.com/AnanSer/LetterManagement",
    liveDemo: "https://let-proj.vercel.app/",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Expense Tracker",
    description: "A dynamic web application that enables users to effortlessly track their expenses, manage budgets, and visualize their financial data in real-time.",
    image: BudgetTracker,
    github: "https://github.com/AnanSer/Expense-Tracker",
    liveDemo: null,
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Food Order App",
    description: "Designed to streamline the online ordering experience. This dynamic web application allows users to browse a variety of menu items and customize their orders.",
    image: Food_Order_App,
    github: "https://github.com/AnanSer/Food_Order_App",
    liveDemo: null,
    technologies: ["React", "Firebase", "CSS", "JavaScript"],
  },
  {
    title: "Creative Design",
    description: "Elevates the user experience through visually appealing elements and intuitive navigation.",
    image: creative_design,
    github: "https://github.com/AnanSer/Expense-Tracker",
    liveDemo: null,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Food Website",
    description: "The design invites users to explore a diverse menu while ensuring easy navigation.",
    image: Food,
    github: "https://github.com/AnanSer/food",
    liveDemo: null,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "User Management System",
    description: "Implemented a seamless user registration and management system that enhances user experience.",
    image: adduser,
    github: "https://github.com/AnanSer/UserFormInterface",
    liveDemo: null,
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Task Management",
    description: "Developed a comprehensive task management application that enhances productivity.",
    image: taskManagement,
    github: "https://github.com/AnanSer/Styling-Task-Management-project",
    liveDemo: null,
    technologies: ["React", "CSS", "JavaScript"],
  },
];

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+K or ⌘+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div>
        <PremiumCursor />
        <ScrollProgress />
        <ScrollToTop />
        <AIAssistant /> {/* Floating AI Assistant - Global */}
        <CommandPaletteButton onClick={() => setIsCommandPaletteOpen(true)} />
        <CommandPalette 
          isOpen={isCommandPaletteOpen} 
          onClose={() => setIsCommandPaletteOpen(false)}
          projects={projectsData}
        />
        <Header />
        <Home />
        <About />
        <Timeline />
        <DeveloperDashboard />
        <DeveloperPlayground />
        <Services />
        <Projects />
        <Testimonials />
        <ContactPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
