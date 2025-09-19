import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const About = () => {
  return (
    <AnimatedPage>
      <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mb-6 text-lg leading-relaxed text-text-main"
            variants={itemVariants}
          >
            Hello! I'm a passionate and detail-oriented Frontend Developer with
            a love for creating intuitive and dynamic user experiences. With a
            strong foundation in JavaScript, React, and modern web technologies,
            I enjoy turning complex problems into simple, beautiful, and
            interactive designs.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed text-text-main"
            variants={itemVariants}
          >
            When I'm not coding, you can find me exploring the latest tech
            trends, contributing to open-source projects, or enjoying a good cup
            of coffee while planning my next project. I'm always eager to learn
            and grow, both personally and professionally.
          </motion.p>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;
