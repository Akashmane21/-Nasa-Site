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



        <div className="Apoding-image-div">
          {isphoto ? (
        <img src={ApodData.url} alt={ApodData.title} />
          ):(
            <iframe src={ApodData.url} title="description"></iframe>

          )}
        {/* <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"   loop  autoplay /> */}

    </div>

       
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
        

        </div>
        
      </div>
      <div className="svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,256L30,240C60,224,120,192,180,197.3C240,203,300,245,360,261.3C420,277,480,267,540,234.7C600,203,660,149,720,144C780,139,840,181,900,176C960,171,1020,117,1080,101.3C1140,85,1200,107,1260,144C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
</div>
          </Bounce>
  );
}
