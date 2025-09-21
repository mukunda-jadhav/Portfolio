import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3 ", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  // Add more skills here
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
};

const Skills = () => {
  return (
    <AnimatedPage>
      <div className="rounded-xl bg-background/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <h1 className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
          My Skills
        </h1>
        <motion.div
          className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/90 p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="mb-4 text-5xl text-primary">{skill.icon}</div>
              <p className="font-semibold text-text-main">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;
