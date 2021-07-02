import React from "react";
import "./Footer.css";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
       
        <a href="https://akash-mane.netlify.app/">
        <p className="dark-mode footer-text">
           " Made with ❤️ by Akash Mane "
          
        </p>
        </a>
        
      </div>
    </Fade>
  );
}
