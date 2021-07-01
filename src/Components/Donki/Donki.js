import React ,{ useState} from "react";
import {Fade} from "react-reveal";
// import Natural from "../../LocalApi's/NaturalApi";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Donki.css";
// import Tech from "../../LocalApi's/Tech"
import Techshort from "../../LocalApi's/Techshort";
import Tech_card from "../../Cards/Tech_card/Tech_card";



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
                        // eslint-disable-next-line
                       <Tech_card 
                          id = {Tech.id}
                          nameid ={Tech.nameid}
                          Name ={Tech.Name}
                          Des ={Tech.Des}
                          nameid2={Tech.nameid2}
                          Type={Tech.Type}
                          titleid={Tech.titleid}
                          img={Tech.img}

                       />
                     ))}

                </div>

      
      </div>
      
    </Fade>
  );
}
