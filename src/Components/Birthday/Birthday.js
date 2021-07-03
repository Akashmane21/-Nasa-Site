import React ,{useState , useEffect} from "react";
import Bounce from 'react-reveal/Bounce';
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Birthday.css";
import Natural from "../../LocalApi's/NaturalApi"
export default function Apod() {
  // eslint-disable-next-line
  const [date, setdate] = useState("2000-08-21")
    const [ApodData, setApodData] = useState([])
    const [isphoto, setisphoto] = useState(false)

  

    useEffect(() => {
       console.log(Natural)
        fetch("https://api.nasa.gov/EPIC/api/natural?api_key=y3A5K36JWGke3nAW9ffShgctFhYRgNI760fediih")
   .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
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
   
  
      <div className="Birhday-main" id="Birthday">
  
      <h1 className="title" >
               
               {" "}  See what Nasa saws on your Birthday{" "}
                 <span className="wave-emoji">📸</span>
               </h1>
        <div className="Birthday-main">
       
          <div className="Birthday-text-div">
            <div className="h4div">
                  <div className="dateselect">
                          <p className="dark-mode Birthday-text-p exp" >
                          Type your Birthdate</p>
                          <input placeholder="yyyy-mm-dd" />
                          <h4>{date}</h4>

                    </div>


    

        <div className="birthphoto">
             <div className="photoblock">

             <img src={ApodData.url} alt={ApodData.title} />

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
