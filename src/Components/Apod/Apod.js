import React ,{useState , useEffect} from "react";
import Bounce from 'react-reveal/Bounce';
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Apod.css";

export default function Apod() {

    const [ApodData, setApodData] = useState([])
    const [isphoto, setisphoto] = useState(false)


    useEffect(() => {
       
        fetch("https://api.nasa.gov/planetary/apod?api_key=y3A5K36JWGke3nAW9ffShgctFhYRgNI760fediih")
   .then(response => {
      return response.json();
    })
    .then(data => {
      setApodData(data)
      if(data.media_type === "image")
      {
          console.log("Image");
          setisphoto(true)
      }
      else{
          console.log("Video")
          setisphoto(false)
  
      }
    })

   

    }, [])


 
  return (
    <Bounce bottom>
   
    <h1 className="photo" >
               
               {" "}  Astronomy Picture Of The Day{" "}
                 <span className="wave-emoji">📸</span>
               </h1>
  
      <div className="Apod-main" id="Apoding">
  
        <div className="Apoding-main">
       
          <div className="Apoding-text-div">
            <div>
              <h1  className="dark-mode Apod-text"    >
               
              {" "}  {ApodData.title}{" "}
              </h1>
              <p className="dark-mode Apoding-text-p exp" >
               {ApodData.explanation}</p>
          <h4>[ Media_type : {ApodData.media_type} ]</h4>
            
            </div>
           
          </div>
          <div className="Apoding-image-div">
          {isphoto ? (
        <img src={ApodData.url} alt={ApodData.title} />
          ):(
            <iframe src={ApodData.url} title="description"></iframe>

          )}
        {/* <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"   loop  autoplay /> */}

    </div>

        </div>
      </div>
          </Bounce>
  );
}
