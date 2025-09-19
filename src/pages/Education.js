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

const educations = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Dr. J J Magdum College of Engineering Jaysinghpur",
    period: " 2027",
    description:
      "Currently pursuing a degree with a focus on web development, algorithms, and artificial intelligence.",
   },
  
];

const Education = () => {
  return (
    <AnimatedPage>
      <motion.div
        className="rounded-xl bg-white p-6 shadow-md sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
          Education
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
              <p className="text-base font-semibold text-slate-500">
                {edu.institution} |      Year of Passout{edu.period}
              </p>
              <p className="mt-2 flex-grow text-slate-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Education;
