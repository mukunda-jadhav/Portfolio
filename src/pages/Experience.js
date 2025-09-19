import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Wayspire ",
    period: "June 2025 - August 2025",
    description:
      "Developed and maintained web applications using React. Collaborated with designers and backend developers to create seamless user experiences.",
  },
  {
    role: "Frontend Developer",
    company: "Wayspire",
    period: "Jun 2025 - Aug 2025",
    description:
      "Assisted in building responsive websites for various clients using HTML, CSS, JavaScript, React.js, Tailwind CSS, and Framer Motion.",
  },
];

const Experience = () => {
  return (
    <AnimatedPage>
      <motion.div
        className="rounded-xl bg-white p-6 shadow-md sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
          Work Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
              <p className="text-md font-semibold text-slate-500">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Experience;
