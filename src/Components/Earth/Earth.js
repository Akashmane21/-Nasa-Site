import React from "react";
import {Fade} from "react-reveal";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Earth.css";



export default function Earth() {
 
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="Earth-main" id="Earthing">
      <h1  className="dark-mode Earthing-text" >
                    
                    {" "} DSCOVR: EPIC{" "}
                        <span className="App-logo">🌍</span>
                    </h1>
        <div className="Earthing-main">



                  <div className="Earthing-text-div">
                  
                    <div className="box">
                          <div className="boxtitle">
                          <h4>Image information </h4>
                          </div>
                          <table >
                         
                            <tr>
                              <td><h5>Processing Version</h5></td>
                              <td><h5>: v5</h5></td>
                            </tr>
                            <tr>
                              <td><h5>Distance to Earth</h5></td>
                              <td><h5>: 1,584,520 km</h5></td>
                            </tr>
                            <tr>
                              <td><h5>Distance to Sun</h5></td>
                              <td><h5>: SEV Angle: 8.71°</h5></td>
                            </tr>

                            <tr>
                              <td><h5>Sun to Earth  </h5></td>
                              <td><h5>: 152,074,419 km</h5></td>
                            </tr>
                            <tr>
                              <td><h5>SEV Angle </h5></td>
                              <td><h5>: 8.71°</h5></td>
                            </tr>
                           
                          </table>
                           
                       </div>
                  </div>


          <div className="Earthing-image-div">
           
              <img
                alt="man sitting on table"
                src="https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626040217.jpg"
              ></img>

          </div>
        </div>
      </div>
      
    </Fade>
  );
}
