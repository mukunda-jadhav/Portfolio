import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Variants for the sidebar animation
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  // Variants for the overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const navLinkClass = ({ isActive }) =>
    `relative block py-2 px-4 text-center text-light-text font-medium transition-colors duration-300 lg:py-0 lg:px-2 before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2 before:rounded-full ${
      isActive ? "text-primary before:w-full" : "hover:text-primary hover:before:w-full"
    } lg:before:bottom-2`;

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      <nav className="sticky top-0 z-40 flex h-20 items-center justify-between bg-secondary px-4 shadow-lg sm:px-6 lg:px-8">
        <NavLink to="/" className="text-2xl font-bold text-primary" onClick={closeSidebar}>
          Mukund Jadhav
        </NavLink>

        <div
          className="cursor-pointer text-2xl text-light-text lg:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.ul
              className="fixed top-0 right-0 z-50 h-full w-64 transform bg-secondary pt-5 shadow-2xl lg:hidden"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <li className="absolute top-5 right-5 cursor-pointer text-2xl text-light-text">
                <FaTimes onClick={closeSidebar} />
              </li>
              <li><NavLink to="/" className={navLinkClass} onClick={closeSidebar}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass} onClick={closeSidebar}>About Me</NavLink></li>
              <li><NavLink to="/skills" className={navLinkClass} onClick={closeSidebar}>Skills</NavLink></li>
              <li><NavLink to="/projects" className={navLinkClass} onClick={closeSidebar}>Projects</NavLink></li>
              <li><NavLink to="/experience" className={navLinkClass} onClick={closeSidebar}>Experience</NavLink></li>
              <li><NavLink to="/education" className={navLinkClass} onClick={closeSidebar}>Education</NavLink></li>
              <li><NavLink to="/certifications" className={navLinkClass} onClick={closeSidebar}>Certifications</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass} onClick={closeSidebar}>Contact</NavLink></li>
            </motion.ul>
          )}
        </AnimatePresence>

        <ul className="hidden lg:flex lg:items-center lg:gap-4">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About Me</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
          <li><NavLink to="/education" className={navLinkClass}>Education</NavLink></li>
          <li><NavLink to="/certifications" className={navLinkClass}>Certifications</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;