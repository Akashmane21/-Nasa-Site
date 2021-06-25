import React ,{useState , useEffect} from "react";
import Bounce from 'react-reveal/Bounce';
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Birthday.css";

export default function Apod() {

    const [ApodData, setApodData] = useState([])
    const [isphoto, setisphoto] = useState(false)

    // const [date, setdate] = useState("")

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
   
    <h1 className="title" >
               
               {" "}  See what Nasa saws on your Birthday{" "}
                 <span className="wave-emoji">📸</span>
               </h1>
  
      <div className="Birhday-main" id="Birthday">
  
        <div className="Birthday-main">
       
          <div className="Birthday-text-div">
            <div className="h4div">
                  <div className="dateselect">
                          <p className="dark-mode Birthday-text-p exp" >
                          Type your Birthdate</p>
                          <input placeholder="yyyy-mm-dd" />
                          <h4>{ApodData.title}</h4>

                    </div>


    

        <div className="birthphoto">
             <div className="photoblock">
               {isphoto ? (
        <img src={ApodData.url} alt={ApodData.title} />
          ):(
            <iframe src={ApodData.url} title="description"></iframe>

          )}
</div>
             <div className="desblock">

          <p className="dark-mode Apoding-text-p exp" >
               {ApodData.explanation}</p>
               </div>


</div>
            
            </div>
           
          </div>
          <div className="Birthday-image-div">
        
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"   loop  autoplay />

    </div>

        </div>
      </div>
          </Bounce>
  );
}
