import React from "react";
import img1 from "./WhatsApp Image 2024-03-02 at 7.49.16 PM.jpeg";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section-content--box">
        <div className="hero--section--content">
          <p1 className="section--title">Hey, I'm Yash</p1>
          <h1 className="hero--section--title">
            <span className="heo--section--title--color">Full stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Dynamic MERN stack developer with expertise in crafting robust,
            <br /> scalable web applications. Proficient in MongoDB, Express.js,
            React.js, and Node.js to deliver seamless user experiences and
            innovative solutions.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={img1} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
