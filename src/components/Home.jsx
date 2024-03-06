import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import sumitImage from "../assets/sumit2.png";
import "../css/Home.css"
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

  // const resumePdfUrl =
  //   "https://drive.google.com/file/d/1FPRQvbAOy98CPHZaP4QckVGhkvyPOVD3/view?usp=drive_link";
  // const githubUrl = "https://github.com/sumit-nagrikar";

  return (
    <>
      <div className="container-fluid bg" id="home">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <div className="container position-relative start-50 translate-middle" style={{ zIndex: "1", top: "20vh", maxWidth: "600px" }}>
            </div>
          </div>

          <div className="col-md-8">
            <div className="position-relative">
              <img src={sumitImage} alt="Sumit" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
