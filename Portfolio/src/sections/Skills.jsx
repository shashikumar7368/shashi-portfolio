import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { SiFastapi, SiFlask, SiOpencv } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, level: "Programming" },
  { name: "Java", icon: <FaJava />, level: "Programming" },
  { name: "JavaScript", icon: <FaJs />, level: "Frontend" },
  { name: "React.js", icon: <FaReact />, level: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 />, level: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "Frontend" },
  { name: "FastAPI", icon: <SiFastapi />, level: "Backend" },
  { name: "Flask", icon: <SiFlask />, level: "Backend" },
  { name: "OpenCV", icon: <SiOpencv />, level: "AI / ML" },
  { name: "Git", icon: <FaGitAlt />, level: "Tools" },
  { name: "GitHub", icon: <FaGithub />, level: "Tools" }
];

function Skills() {
  return (
    <section className="skills section-padding" id="skills">

      <div className="section-heading">
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card glass-card"
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -10, scale: 1.04 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;