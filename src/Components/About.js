import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
          Project UCode
        </h1>
        <p className="primary-text">
          is a non-profit organization established to help encourage and foster the education of computer scinece, enginerring, and specifically programming.
        </p>
        <p className="primary-text">
          We aim to educate individuals in the ever growing skill of programming.
        </p>
        <div className="about-buttons-container">
          <a href="https://forms.gle/bYPoVRW6JondXuFh9"><button className="secondary-button">Learn More</button></a>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
