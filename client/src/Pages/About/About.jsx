import React from "react";
import img from "./WhatsApp Image 2024-03-02 at 7.52.13 PM.jpeg";

const About = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={img} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate and dedicated Software Engineer with expertise in
            the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a
            strong foundation in both frontend and backend development, I thrive
            in creating robust and scalable web applications that deliver
            exceptional user experiences.
          </p>
          <p className="hero--section-description">
            My journey in the world of software engineering began with a
            curiosity to understand how technology shapes our lives. This
            curiosity evolved into a deep-seated passion for coding and
            problem-solving. Throughout my career, I have honed my skills in
            MERN stack development, mastering each component to build dynamic
            and interactive web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
