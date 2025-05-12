import "../../styles/About.css";
import profilePhoto from "../../assets/profile_img.jpeg";
4;
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <header>
          <div className="heading">About Me</div>
          <div className="myIntro">My Intro</div>
        </header>

        <div className="intro">
          <img src={profilePhoto} alt="Profile photo" />

          <section>
            <h2 className="intro-heading">
              Hello!!!😇 I'm <span className="name-skill">Prateek</span> and I'm
              a
            </h2>

            <div className="paras">
              <p>
                I am a passionate and enthusiast front-end developer focused on
                creating attractive and user-friendly websites. I am always
                curious and keen to learn new skills and improve my skillsets
                and try to keep updated myself with the latest industry trends.
              </p>

              <p>
                I have an overall experience of 4+ years and 3+ years as a{" "}
                <span className="name-skill">
                  front-end developer (React.js Developer)
                </span>{" "}
                and have been actively looking for new opportunities.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
