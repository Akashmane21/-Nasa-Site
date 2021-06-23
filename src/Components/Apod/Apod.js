import React ,{useState , useEffect} from "react";
import {Fade} from "react-reveal";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Apod.css";



export default function Apod() {

    const [ApodData, setApodData] = useState([])

    useEffect(() => {
       
        fetch("https://api.nasa.gov/planetary/apod?api_key=y3A5K36JWGke3nAW9ffShgctFhYRgNI760fediih")
   .then(response => {
      return response.json();
    })
    .then(data => {
      setApodData(data)
    })

    }, [])


 
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="Apod-main" id="greeting">
        <div className="Apoding-main">
       
          <div className="greeting-text-div">
            <div>
              <h1  className="dark-mode Apod-text"    >
               
              {" "}  {ApodData.title}{" "}
                <span className="wave-emoji">📸</span>
              </h1>
              <p className="dark-mode greeting-text-p exp" >
               {ApodData.explanation}</p>
          <h4>[ Media_type : {ApodData.media_type} ]</h4>
            
            </div>
           
          </div>
          <div className="greeting-image-div">
          <iframe src={ApodData.url} title="description"></iframe>
        {/* <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"   loop  autoplay /> */}

    </div>
        </div>
      </div>
    </Fade>
  );
}
