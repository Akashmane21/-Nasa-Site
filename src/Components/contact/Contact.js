import React from "react";
import "./Contact.css";
import SocialMedia from "../socialMedia/SocialMedia";
import {Fade} from "react-reveal";
import Footer from "../footer/Footer";

export default function Contact() {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">

        <div className="contact-image-div">
              <img
                alt="Akash Mane"
                src="https://akash-mane.netlify.app/static/media/dp.4b447cb8.jpg"
              ></img>
          </div>


          <div className="contact-header">
            <h1 className="heading contact-title">Contact Me ☎️</h1>
            <p
              className= "dark-mode contact-subtitle"
            >
              Discuss a project or just want to say hi? My Inbox is open for all.
            </p>
            <div
              className="dark-mode contact-text-div"
            >
              <a className="contact-detail" href={"tel:+918482930422"}>
                +918482930422
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href="https://akash-mane.netlify.app/"
              >
                Portfolio - Site
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
         
        </div>
        <Footer />
      </div>
    </Fade>
  );
}
