
import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaVideo,
  FaEye,
  FaWhatsapp
} from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that provides intelligent responses using Google's Gemini API.",
    icon: <FaRobot />,
    technologies: ["React", "Flask", "Python", "Gemini API"],
    github: "https://github.com/shashikumar7368/ai-chatbot26",
    demo: "https://ai-chatbot26.netlify.app",
    status: "Live"
  },

  {
    title: "WhatsApp Clone",
    description:
      "A full-stack real-time messaging application featuring user authentication, contacts, private chats, group messaging and responsive chat interfaces.",
    icon: <FaWhatsapp />,
    technologies: [
      "React",
      "FastAPI",
      "MongoDB Atlas",
      "WebSockets"
    ],
    github: "#",
    demo: "https://whatsap26.netlify.app",
    status: "Full Stack"
  },

  {
    title: "MockMate AI Interview",
    description:
      "An AI-powered mock interview platform featuring spoken interview questions, webcam preview, voice answers, automatic question navigation and countdown timer.",
    icon: <FaVideo />,
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Gemini API"
    ],
    github: "#",
    demo: "#",
    status: "In Development"
  },

  {
    title: "Face & Eye Detection",
    description:
      "A computer vision application that detects human faces and eyes in real time using OpenCV and Haar Cascade classifiers.",
    icon: <FaEye />,
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision"
    ],
    github: "https://github.com/shashikumar7368/Face-Eye-Detection",
    demo: "https://face-eye-detection-opencv-22vgtf8ci32u9jm78oubrv.streamlit.app/",
    status: "Project"
  }
];

function Projects() {
  return (
    <section className="projects section-padding" id="projects">

      <div className="section-heading">
        <p>WHAT I'VE BUILT</p>
        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card glass-card"
            key={project.title}

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{
              duration: 0.6,
              delay: index * 0.12
            }}

            whileHover={{ y: -10 }}
          >

            <div className="project-top">

              <div className="project-icon">
                {project.icon}
              </div>

              <span className="project-status">
                {project.status}
              </span>

            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-tags">

              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-links">

              {project.github !== "#" ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

              ) : (

                <span className="coming-soon">
                  GitHub coming soon
                </span>

              )}

              {project.demo !== "#" ? (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>

              ) : (

                <span className="coming-soon">
                  Demo coming soon
                </span>

              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
