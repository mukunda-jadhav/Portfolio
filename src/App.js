import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      {/* The Footer component has been removed from here. */}
    </div>
  );
}

export default App;
