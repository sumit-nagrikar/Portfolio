import React from "react";
import "../css/About.css";

const About = () => {
  // const myElementRef = useRef(null);
  return (
    <div >
    <div className="container-about" id="about">
      <p className="text-center">______________________________________________________________________________________________________________________</p>
      <h1>About Me</h1>
      <h2>Hey, I'm Sumit Nagrikar</h2>
      {/* <h2>Welcome to my personal space. Here's a glimpse into who I am and what I do.</h2> */}
      <p>
        Hi there! I am a <span className="highlight">Front End Devepoler</span>{" "}
        I'm passionate about creating meaningful and engaging web experiences.
        With a background in <span className="highlight">Web Developement</span>
        , I bring a unique perspective to every project. My skills include HTML,
        CSS, JavaScript, and React. I'm always eager to learn and adapt to new
        technologies. When I'm not coding, you can find me exploring the latest
        design trends, experimenting with new coding techniques, or enjoying a
        good cup of coffee.
        <span>Let's collaborate and build something amazing together!</span>
      </p>
      <div className="skills">
        <h3>Why work with me?</h3>
        <p>Analytical <span className="checkmark">&#x2713;</span> Results driven </p>
        <p>Clear communicator <span className="checkmark">&#x2713;</span> Deadline conscious</p>
        <p>Strong interpersonal skills <span className="checkmark">&#x2713;</span> Big-picture problem solver</p>
      </div>
    </div>
    </div>
  );
};

export default About;
