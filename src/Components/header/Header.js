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
        {/* <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" /> */}
          <span className="logo-name">Nasa Astrology </span>
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
        {/* {viewExperience && ( */}
            <li>
              <a href="/">About me</a>
            </li>
          {/* )} */}
          {/* {viewSkills && ( */}
            <li>
              <a href="#skills">Skills</a>
            </li>
          {/* )} */}
        
          {/* {viewOpenSource && ( */}
            <li>
              <a href="#opensource">Project's</a>
            </li>
          {/* )} */}
          {/* {viewAchievement && ( */}
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          {/* )} */}
          {/* {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )} */}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
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
