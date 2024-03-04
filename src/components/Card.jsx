import React from "react";
import "../css/Card.css"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const Card = () => {
  const resumePdfUrl = "https://drive.google.com/file/d/1FPRQvbAOy98CPHZaP4QckVGhkvyPOVD3/view?usp=drive_link"; 
  const githubUrl = "https://github.com/sumit-nagrikar";
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Front End Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
      });
       // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    
    <>
    
      <div className="container">
        <div className="row">
          {/* Card component taking up fixed-size space on the left */}
          <div className="col-sm-6">
            <div className=" position-fixed top-0 bottom-0 end-0 bg-dark-transparent p-5">
              <div className="p-6">
                <h2 className="text-white">Hi, My name is <span className="purple fs-1 ">Sumit</span></h2>
                <h2 className="text-white">and I am a passionate</h2>
                {/* <!-- Element to contain animated typing --> */}
                <span className="purple fs-1" ref={el}></span>
                {/* <p className="text-black" style={{ wordWrap: "break-word" }}>
                I am a passionate front-end web developer dedicated to crafting engaging and user-friendly digital experiences. With a keen eye for design and a strong foundation in web technologies, I specialize in bringing creative concepts to life through code. From building responsive layouts to optimizing.
                </p> */}
                {/* <hr className="text-white" /> */}
                <div className="mt-3">
                <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2" download>Download Resume</a>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Github</a>
                </div>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          {/* <div className="col-lg-6">
      <img
        className="w-100 "
        src="https://c4.wallpaperflare.com/wallpaper/54/325/66/work-in-progress-wallpaper-preview.jpg"
        alt="Sumit"
      />
    </div> */}
        </div>
      </div>
    </>
  );
  
};
