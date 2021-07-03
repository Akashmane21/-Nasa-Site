import React , {useState , useEffect}  from "react";
import {Fade} from "react-reveal";
import "./Gallarypage.css";
// import Tech_card from "../../Cards/Tech_card/Tech_card";
import Zoom from 'react-reveal/Zoom';
import { GallaryApi } from "../../LocalApi's/Gallary";
import Header from "../header copy/HeaderCopy";
import Feedback from "../Feedback/Feedback";
import Contact from "../contact/Contact";


export default function Gallarypage() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  
  }, [])
  
  
console.log(GallaryApi);
// eslint-disable-next-line
const [Gallary, setGallary] = useState(GallaryApi)

  return (
    <Fade bottom duration={1000} distance="40px">
    <Header />
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
             
      </div>
      </div>
<Feedback />
<Contact />
    </Fade>
  );
}
