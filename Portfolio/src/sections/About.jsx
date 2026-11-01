import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section className="about section-padding" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Building Ideas Into Digital Experiences</h3>

          <p>
            I'm Shashi Kumar, a 2026 B.Tech graduate in
            Artificial Intelligence and Machine Learning.
            I'm passionate about software development,
            artificial intelligence and modern web technologies.
          </p>

          <p>
            I enjoy developing practical applications,
            solving problems and learning new technologies.
            My goal is to build useful, scalable and
            user-friendly digital products.
          </p>

          <p>
            I'm currently looking for opportunities where
            I can contribute my skills, learn from experienced
            developers and grow as a software professional.
          </p>
        </motion.div>

        <div className="about-cards">

          <motion.div
            className="info-card glass-card"
            whileHover={{ y: -8 }}
          >
            <FaGraduationCap />
            <h3>Education</h3>
            <p>B.Tech – Artificial Intelligence & Machine Learning</p>
            <span>2022 – 2026</span>
          </motion.div>

          <motion.div
            className="info-card glass-card"
            whileHover={{ y: -8 }}
          >
            <FaCode />
            <h3>Development</h3>
            <p>Frontend, Backend and AI-powered applications</p>
          </motion.div>

          <motion.div
            className="info-card glass-card"
            whileHover={{ y: -8 }}
          >
            <FaRocket />
            <h3>Career Goal</h3>
            <p>Grow as a Software Developer and build innovative solutions</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;