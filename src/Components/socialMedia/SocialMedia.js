import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
 
  return (
    <div className="social-media-div">
        <a
          href="https://github.com/Akashmane21"
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>

        <a
          href="https://www.linkedin.com/in/akash-mane-a2072a186/"
            className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
    
        <a
          href="mailto:akash21mane21@gmail.com"

          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
    
     
    
        <a
          href="https://www.facebook.com/akash.mane.777363/"
            className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
    
        <a
          href="https://www.instagram.com/akash_mane21/"
             className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
     
       
   
    
    
    </div>
  );
}
