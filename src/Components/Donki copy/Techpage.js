import React  from "react";
import Tech_cardpage from "../../Cards/Tech_card copy/Tech_cardpage";
import Header from "../header copy/HeaderCopy";
import Feedback from "../Feedback/Feedback";
import Contact from "../contact/Contact";

import "./Tech.css";



export default function Techpage() {




  return (
    <>
      <div className="Donki_main" id="Donki">
      <Header />
                   <h1  className="Tech_title" >  New Technologies 🥇 </h1>
                  
                <div className="Tech_area">
              {/* eslint-disable-next-line  */}
                  <Tech_cardpage  />
                </div>
      
      </div>
      <Feedback />
      <Contact />
      </>
  );
}
