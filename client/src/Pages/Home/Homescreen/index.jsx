import React from "react";
import HeroSection from "../../Herosection/HeroSection";
import About from "../../About/About";
import MySkills from "../../MySkills/MySkills"
import MyPortfolio from "../../MyPortfolio/MyPortfolio"
// import Education from "../../Education/Education"
import Footer from "../../Footer/Footer"
import Contact from "../../Contact/Contact"
import Navbar from "../../Navbar/Navbar";

const Home = () => {
  return <div>
    <Navbar/>
    <HeroSection/>
    <MySkills/>
    <About/>
    <MyPortfolio/>
    {/* <Education/> */}
    <Contact/>
    <Footer/>
  </div>;
};

export default Home;
