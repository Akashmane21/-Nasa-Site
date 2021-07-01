import React  from "react";
// import {Fade} from "react-reveal";
// import Natural from "../../LocalApi's/NaturalApi";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Donki.css";
// import Tech from "../../LocalApi's/Tech"
// import Techshort from "../../LocalApi's/Techshort";
import Tech_card from "../../Cards/Tech_card/Tech_card";



export default function Donki() {




  return (
      <div className="Donki_main">
                   <h1  className="Tech_title" >  New Technologies 🥇 </h1>
                  
                <div className="Tech_area">
              {/* eslint-disable-next-line  */}
                  <Tech_card  />
                </div>
<button className="seebtn">See More</button>
      
      </div>
      
  );
}
