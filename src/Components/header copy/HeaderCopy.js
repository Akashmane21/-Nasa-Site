import React from "react";
import "./HeaderCopy.css";
import Headroom from "react-headroom";
import Zoom from 'react-reveal/Zoom';
import {NavLink} from 'react-router-dom'


function HeaderCopy() {

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
            <NavLink exact activeClassName = "active_class" to="/">
Apod</NavLink>
            </li>
       
            <li>
            <NavLink exact activeClassName = "active_class" to="/">
Earth Epic</NavLink>
            </li>
        
            <li>
              
              <NavLink exact activeClassName = "active_class" to="/Donki">
Technologies
</NavLink>
            </li>
         
            <li>
            <NavLink exact activeClassName = "active_class" to="/Gallary">
Gallary</NavLink>
            </li>
            
            <li>
            <NavLink exact activeClassName = "active_class" to="/">
Feedback</NavLink>
            </li>
      
          <li>
          <NavLink exact activeClassName = "active_class" to="/">
Contact Me</NavLink>
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
export default HeaderCopy;
