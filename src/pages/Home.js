import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

// Main container for staggering the page sections
// Main container for staggering the page sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

// Variants for the name container to stagger letters
const nameContainerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

// Variants for each letter of the name
const letterVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

// Variants for other page items (paragraphs, button)
const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// ... (rest of the code is the same)

// Create a motion-wrapped Link component for animations
const MotionLink = motion(Link);

const Home = () => {
  const name = "Mukund Jadhav";

  return (
    <AnimatedPage>
      <motion.div
        className="flex min-h-[70vh] flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Name */}
        <motion.h1
          className="text-4xl font-extrabold text-secondary sm:text-5xl md:text-7xl"
          variants={nameContainerVariants}
          aria-label={name}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              className="inline-block"
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-2 text-xl font-medium text-primary sm:text-2xl md:text-3xl"
          variants={itemVariants}
        >
          Creative Frontend Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-2xl text-lg text-text-main"
          variants={itemVariants}
        >
          I build beautiful, responsive, and user-friendly web applications.
          Welcome to my personal space on the web.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <MotionLink
            to="/projects"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 px-8 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 15px 30px rgba(99, 102, 241, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </MotionLink>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Home;
