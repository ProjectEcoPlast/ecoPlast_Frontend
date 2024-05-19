// src/pages/About.js

import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Plastic Waste Management System! Our mission is to tackle the global challenge of plastic waste by providing an efficient and integrated platform for waste producers, scrap collectors, and recycling vendors.
      </p>
      <h2>Our Goals</h2>
      <ul>
        <li>Improve the efficiency of plastic waste segregation and recycling through advanced machine learning models.</li>
        <li>Connect waste producers, collectors, and vendors to streamline the waste management process.</li>
        <li>Provide location-based services to facilitate the collection and recycling of plastic waste.</li>
        <li>Track and report on the environmental impact of plastic waste management activities.</li>
      </ul>
      <h2>Our Team</h2>
      <p>
        We are a dedicated team of environmental enthusiasts, data scientists, and software developers working together to create a sustainable solution for plastic waste management. Our combined expertise enables us to develop innovative technologies and systems that address the complex issues associated with plastic waste.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or would like to get involved, feel free to <a href="/contact">contact us</a>. We are always looking for new partners and collaborators who share our vision for a cleaner, greener planet.
      </p>
    </div>
  );
}

export default About;