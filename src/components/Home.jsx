import React from "react";
import { Card } from "./Card";
import sumitImage from "../assets/sumit2.png";
import "../css/Home.css"
function Home() {
  return (
    <>
      <div 
       className="bg" id="home"
      >
        <div className="row">
          <div className="col-sm-6">
            <div
              className="container position-relative start-50 translate-middle"
              style={{ zIndex: "1", top: "20vh", maxWidth: "600px" }}
            >
              <Card />
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="position-relative" 
            >
              <img src={sumitImage} alt="Sumit" /> {/* style={{zIndex: "1",  maxWidth:"900px", height: "800px", marginRight:"100px" , marginTop: "70px", borderRadius: "8px"}}/ */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
