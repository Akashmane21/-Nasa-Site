import React from "react";
import {Fade} from "react-reveal";
import SocialMedia from "../socialMedia/SocialMedia";
import "./Greeting.css";



export default function Greeting() {
 
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1  className="dark-mode greeting-text"    >
               
              {" "} Explore the Space-Zone{" "}
                <span className="wave-emoji"></span>
              </h1>
              <div className="h4div">

              <h4> </h4>
              </div>
              
              <p className="dark-mode greeting-text-p" >
                Explore the Space Zone with me which Contains the Astronomy Picture of the Day , Daily natural color imagery of Earth from the EPIC camera onboard the DSCOVR spacecraft.
                All Technologies & Image Gallary of NASA              </p>
         <br />
        
          <h4>[ Developed by Akash Mane ]</h4>
            <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
           
              {/* <img
                alt="man sitting on table"
                src={logo}
              ></img> */}
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_R6y0Xw.json"  background="transparent"  speed="1"   loop  autoplay />

          </div>
        </div>
      </div>
      
    </Fade>
  );
}
