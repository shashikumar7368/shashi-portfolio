
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Planet from "./Planet";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AVAILABLE FOR OPPORTUNITIES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span>Shashi Kumar</span>
          <br />
          A Developer.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          B.Tech AI & ML graduate passionate about building
          modern web applications, AI-powered solutions
          and innovative digital experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="primary-btn">
            Explore My Work <FaArrowRight />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me <FaDownload />
          </a>
        </motion.div>

      </div>

     <div className="hero-glow"></div>

<div className="hero-3d">
  <Planet />
</div>
    </section>
  );
}

export default Hero;
