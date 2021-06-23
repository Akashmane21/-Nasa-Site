import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.css";
export default function Greeting() {
 
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className="dark-mode greeting-text" 
              >
                {" "}
                Hii all, I am Mane Akash{" "}
                <span className="wave-emoji">👋</span>
              </h1>
              <p
                className="dark-mode greeting-text-p"
              >
                Hello my name is Akash
              </p>
              
              <div className="button-greeting-div">
              
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
           
              {/* <img
                alt="man sitting on table"
                src={logo}
              ></img> */}
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_R6y0Xw.json"  background="transparent"  speed="1"   loop  autoplay>

              </lottie-player>
          </div>
        </div>
      </div>
    </Fade>
  );
}
