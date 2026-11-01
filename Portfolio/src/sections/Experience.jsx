
import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCertificate,
  FaCode
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase />,
    type: "INTERNSHIP",
    title: "AI & Machine Learning Intern",
    company: "Innovate Intern",
    date: "March 2025 – April 2025",
    description:
      "Completed a four-week internship focused on Artificial Intelligence and Machine Learning. Gained practical experience in computer vision using Python and OpenCV.",
    tags: ["Python", "AI & ML", "OpenCV"]
  },
  {
    icon: <FaCode />,
    type: "INTERNSHIP PROJECT",
    title: "Real-Time Face & Eye Detection",
    company: "Innovate Intern",
    date: "March 2025 – April 2025",
    description:
      "Developed an application to detect human faces and eyes in real time using Haar Cascade classifiers and OpenCV.",
    tags: ["Python", "OpenCV", "Haar Cascades"]
  },
  {
    icon: <FaCertificate />,
    type: "CERTIFICATION",
    title: "AI & ML Internship Certificate",
    company: "Innovate Intern",
    date: "April 2025",
    description:
      "Received a certificate after successfully completing the four-week Artificial Intelligence and Machine Learning internship.",
    tags: ["Artificial Intelligence", "Machine Learning"]
  }
];

function Experience() {
  return (
    <section className="experience section-padding" id="experience">

      <div className="section-heading">
        <p>MY PROFESSIONAL JOURNEY</p>
        <h2>Experience & <span>Certifications</span></h2>
      </div>

      <div className="timeline">

        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-card glass-card">
              <span className="timeline-type">{item.type}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <span className="timeline-date">{item.date}</span>

              <p>{item.description}</p>

              <div className="tech-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Experience;
