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

const projects = [
  {
    title: "Blogging Website",
    description:
      "📝 Blogging website is a dynamic blogging platform designed to empower writers and creators to share their thoughts, stories, and expertise with the world. Built with a responsive frontend and secure backend, it features user authentication, post creation and editing, category tagging, and a sleek UI for seamless reading and interaction. Whether you're a casual blogger or a content strategist, BlogSphere offers a clean, customizable space to express and engage.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "https://blog-45z0.onrender.com",
    repo: "https://github.com/mukunda-jadhav/blog",
  },
  {
    title: "Chat-Web-Application",
    description:
      "💬 ChatConnect is a real-time web-based messaging platform that enables seamless communication between users. Built with modern frontend frameworks and powered by WebSocket technology, it supports instant message exchange, user authentication, and responsive design across devices. With features like emoji support, typing indicators, and message history, ChatConnect delivers a smooth and interactive chatting experience ideal for both casual and professional use.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    link: "https://chatweb-pjtt.onrender.com",
    repo: "https://github.com/mukunda-jadhav/chatweb",
  },
  // Add more projects
];

const Projects = () => {
  return (
    <AnimatedPage>
      <motion.div
        className="rounded-xl bg-background/80 p-6 shadow-xl backdrop-blur-md sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-8 inline-block border-b-4 border-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
          Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col rounded-xl border border-slate-200 bg-white/90 p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-2xl font-bold text-primary">
                {project.title}
              </h3>
              <p className="mt-2 flex-grow text-slate-600">
                {project.description}
              </p>
              <p className="mt-4">
                <strong>Technologies:</strong> {project.tech.join(", ")}
              </p>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Live Demo
                </a>
                <span className="mx-2">|</span>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Projects;
