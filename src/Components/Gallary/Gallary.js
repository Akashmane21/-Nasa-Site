import React , {useState}  from "react";
import {Fade} from "react-reveal";
import "./Gallary.css";
// import Tech_card from "../../Cards/Tech_card/Tech_card";
import { Galaryshort } from "../../LocalApi's/Gallary";
import Zoom from 'react-reveal/Zoom';
import {NavLink} from 'react-router-dom'


export default function Gallary() {

console.log(Galaryshort);
// eslint-disable-next-line
const [Gallary, setGallary] = useState(Galaryshort)

  return (
    <Fade bottom duration={1000} distance="40px">
    
          <div className="Gallary_main" id="Gallary">
          <div className="gbg">
                   <h1  className="gallary_title" >  Photo Gallary  </h1>

        <div className="Photo_grid">
        {Gallary.map((Gallary) => (
            <Zoom left>

            <img src={Gallary} alt={Gallary} />
            </Zoom>

        ))} 
        </div>
        <NavLink exact activeClassName = "active_class" to="/Gallary">
<button className="seebtn">See More</button></NavLink>
             
      </div>
      </div>

    </Fade>
  );
}
