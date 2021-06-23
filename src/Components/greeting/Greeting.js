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
               
              {" "}  NASA - Space Administration{" "}
                <span className="wave-emoji">🚀</span>
              </h1>
              <p className="dark-mode greeting-text-p" >
                The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an 
                independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.              </p>
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
