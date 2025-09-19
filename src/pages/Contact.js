import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

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
    transition: { type: "spring", stiffness: 100 },
  },
};

const Contact = () => {
  return (
    <AnimatedPage>
      <motion.div
        className="rounded-xl bg-white p-6 text-center shadow-md sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl"
          variants={itemVariants}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg"
          variants={itemVariants}
        >
          I'd love to connect with you! Whether you have a question or just want
          to say hi, feel free to reach out through any of the platforms below.
        </motion.p>

        <div className="grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2">
          {/* Direct Contact */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Direct Contact
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="h-5 w-5 text-slate-500" />
              <a
                href="mailto:mukundjadhav1907@gmail.com"
                className="text-lg text-slate-700 hover:text-primary hover:underline"
              >
                mukundjadhav1907@gmail.com
              </a>
            </div>
            <div className="mt-3 flex items-center justify-center space-x-3">
              <FaPhone className="h-5 w-5 text-slate-500" />
              <a
                href="tel:+919420778504"
                className="text-lg text-slate-700 hover:text-primary hover:underline"
              >
                +91 9420778504
              </a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-bold text-primary">On the Web</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/mukunda-jadhav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-4xl text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/mukund-jadhav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-4xl text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/mukund_jadhav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-4xl text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/mukunda__jadhav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-4xl text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Contact;
