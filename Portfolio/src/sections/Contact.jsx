
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {

      const response = await fetch(
        "https://shashi-portfolio-gorp.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
  throw new Error(
    typeof data.detail === "string"
      ? data.detail
      : data.detail?.[0]?.msg || "Unable to send message."
  );
}

      setStatus("Message sent successfully! Thank you for contacting me.");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      setStatus(
        error.message || "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="contact section-padding" id="contact">

      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h3>Let's Work Together</h3>

          <p>
            I'm open to software development opportunities,
            collaborations and exciting projects.
            Feel free to contact me!
          </p>

          <div className="contact-links">

            <a href="mailto:kokkushashi82@gmail.com">
              <FaEnvelope />
              <span>Email Me</span>
            </a>

            <a
              href="https://wa.me/8688503431"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/shashikumar7368"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/kokku-shashikumar-110825335"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </motion.div>

        <motion.form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h3>Send Me a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            minLength={5}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>

          {status && (
            <p className="contact-status" role="status">
              {status}
            </p>
          )}

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;
