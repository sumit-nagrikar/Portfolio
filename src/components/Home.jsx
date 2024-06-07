import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import sumitImage from "../assets/sumit2.png";
import "../css/Home.css";

function Home() {
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

  const resumePdfUrl =
    "https://drive.google.com/file/d/1FPRQvbAOy98CPHZaP4QckVGhkvyPOVD3/view?usp=drive_link";
  const githubUrl = "https://github.com/sumit-nagrikar";

  return (
    <div className="background">
      <div className="container">
        <div className="row">
          {/* Card component contents directly in the first column */}
          <div className="col-sm-12 col-md-6 col-lg-6 text-start text-white d-flex align-items-center justify-content-center">
            <div className="">
              <h2>
                Hi, My name is <span className="purple">Sumit</span>
              </h2>
              <h2>and I am a passionate</h2>
              {/* Element to contain animated typing */}
              <span className="purple fs-1" ref={el}></span>
              <div className="mt-3">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light me-2"
                  download
                >
                  Download Resume
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Visit Github
                </a>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <img
              src={sumitImage}
              alt="abc"
              className="img-fluid w-100 mb-md-0 rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
