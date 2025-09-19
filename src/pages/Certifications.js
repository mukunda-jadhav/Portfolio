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

const certifications = [
  {
    name: "Training at wayspire EdTech pvt Ltd in",
    issuer: "Wayspire",
    date: "2025",
    link: "https://drive.google.com/file/d/1HV60Xu40olPbTQmBYfBKIbJrQRkc1jx7/view?usp=sharing",
  },
  {
    name: "Internship at wayspire EdTech pvt Ltd in",
    issuer: "Wayspire",
    date: "2025",
    link: "https://drive.google.com/file/d/12uSF7FgH2SjTaG0kLEeS0hhbBzZUJDvR/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <AnimatedPage>
      <motion.div
        className="rounded-xl bg-white p-6 shadow-md sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
          Certifications
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-primary">{cert.name}</h3>
              <p className="text-md font-semibold text-slate-500">
                {cert.issuer} | {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-primary hover:underline"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Certifications;
