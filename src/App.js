import About from "./Components/About/About";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import ContactPage from "./Components/Contact-form/ContactForm";
// import "./Components/Header/header.css";
// import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
