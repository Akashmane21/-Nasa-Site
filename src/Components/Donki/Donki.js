import React ,{ useState} from "react";
import {Fade} from "react-reveal";
// import Natural from "../../LocalApi's/NaturalApi";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Donki.css";
// import Tech from "../../LocalApi's/Tech"
import Techshort from "../../LocalApi's/Techshort";



export default function Donki() {

    console.log(Techshort);
    // eslint-disable-next-line
    const [Techapi, setTechapi] = useState(Techshort)

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="Donki_main">
                   <h1  className="Tech_title" >  New Technologies 🥇 </h1>

                <div className="Tech_area">

                    {Techapi.map((Tech) => (
                        <>
                        <div className="Tech_box">

                            <img  alt="Earth" src={Tech.img} />
                            <h5>{Tech.Name}</h5>
                            <h6>{Tech.Type}</h6>

                        </div>
                        </>
                     ))}

                </div>

      
      </div>
      
    </Fade>
  );
}
