import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/Card.css";

const Card = () => {
  const resumePdfUrl = "https://drive.google.com/file/d/1FPRQvbAOy98CPHZaP4QckVGhkvyPOVD3/view?usp=drive_link";
  const githubUrl = "https://github.com/sumit-nagrikar";

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer"], // Strings to display
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destroying on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Card component */}
        <div className="col-sm-6">
          <div className="p-6">
            <h2>Hi, My name is <span className="purple fs-1">Sumit</span></h2>
            <h2>and I am a passionate</h2>
            {/* Element to contain animated typing */}
            <span className="purple fs-1" ref={el}></span>
            {/* <p className="text-black" style={{ wordWrap: "break-word" }}>
              I am a passionate front-end web developer dedicated to crafting engaging and user-friendly digital experiences. With a keen eye for design and a strong foundation in web technologies, I specialize in bringing creative concepts to life through code. From building responsive layouts to optimizing.
            </p> */}
            <div className="mt-3">
              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-2 mb-2" download>
                Download Resume
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit Github
              </a>
            </div>
          </div>
        </div>

        {/* Image on the right */}
        {/* <div className="col-lg-6">
          <img
            className="w-100"
            src="https://c4.wallpaperflare.com/wallpaper/54/325/66/work-in-progress-wallpaper-preview.jpg"
            alt="Sumit"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
