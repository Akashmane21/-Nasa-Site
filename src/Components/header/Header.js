import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import Zoom from 'react-reveal/Zoom';


function Header() {

  return (
    <Headroom>

      <header className= "header">
      <Zoom right>
        <a href="/" className="logo">
        <img alt="feedback animation" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" />
          <span className="logo-name">Nasa </span>
        </a>
        </Zoom>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "red"}}
        >
          <span className= "navicon"></span>
        </label>
        <Zoom top>
                <ul className= "menu">
            <li>
              <a href="#Apoding">Apod</a>
            </li>
       
            <li>
              <a href="#Earthing">Earth Epic</a>
            </li>
        
            <li>
              <a href="#Donki">Technologies</a>
            </li>
         
            <li>
              <a href="#Gallary">Gallary</a>
            </li>
            
            <li>
              <a href="#Feedbacking">Feedback</a>
            </li>
      
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              {/* <ToggleSwitch /> */}
            </a>
          </li>
        </ul>
        </Zoom>
      </header>
      </Headroom>
   
  );
}
export default Header;
