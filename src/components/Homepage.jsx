import React from 'react';
import { motion } from 'framer-motion';
import './Homepage.css';

const Homepage = () => (
  <section className="homepage">
    <motion.div 
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to <span className="brand">NeuraLearn</span></h1>
      <p className="tagline">Unlocking the Future of Intelligence</p>
      <motion.img 
        src="/vite.svg" 
        alt="AI Visual" 
        className="hero-img"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.div>
    <div className="quick-links">
      <a href="/courses" className="quick-link">Explore Courses</a>
      <a href="/resources" className="quick-link">Resource Hub</a>
      <a href="/community" className="quick-link">Join Community</a>
    </div>
  </section>
);

export default Homepage;
