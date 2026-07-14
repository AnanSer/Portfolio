import About from "./Components/About/About";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Services from "./Components/Services/Services";
import Timeline from "./Components/Timeline/Timeline";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import AIAssistant from "./Components/AIAssistant/AIAssistant";
import ContactPage from "./Components/Contact-form/ContactForm";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import PremiumCursor from "./Components/UI/PremiumCursor";
import ScrollProgress from "./Components/UI/ScrollProgress";
import ScrollToTop from "./Components/UI/ScrollToTop";
import "./styles/ripple.css";
import "./styles/micro-interactions.css";

function App() {
  return (
    <ThemeProvider>
      <div>
        <PremiumCursor />
        <ScrollProgress />
        <ScrollToTop />
        <AIAssistant /> {/* Floating AI Assistant - Global */}
        <Header />
        <Home />
        <About />
        <Services />
        <Timeline />
        <Projects />
        <Testimonials />
        <ContactPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
