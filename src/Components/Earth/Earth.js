import React ,{useEffect , useState} from "react";
import {Fade} from "react-reveal";
import Natural from "../../LocalApi's/NaturalApi";
// import SocialMedia from "../socialMedia/SocialMedia";
import "./Earth.css";




export default function Earth() {

  const [eimg, seteimg] = useState('https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626004554.jpg')
  const [lan, setlan] = useState('18.112793')
  const [lon, setlon] = useState('162.546387')
  const [x, setx] = useState('134539.761915')
  const [y, sety] = useState('-302563.631983')
  const [z, setz] = useState('-155250.100487')
  var i = 0


  const date = new Date().toLocaleDateString()

const imgs = ["https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626004554.jpg",
 "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626015122.jpg", 
 "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626025650.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626040217.jpg", 
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626050744.jpg",
 "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626061312.jpg",
 "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626071839.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626082407.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626092934.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626103501.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626114028.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626124556.jpg",
   "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626135124.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626145651.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626160219.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626170747.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626181314.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626191841.jpg",
  "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626202409.jpg",
 "https://epic.gsfc.nasa.gov/archive/natural/2021/06/26/jpg/epic_1b_20210626212937.jpg"]
 // eslint-disable-next-line
 const [imgsarray, setimgsarray] = useState(imgs)

      useEffect(() => {


        
            function myFunction() {
              setInterval(function(){ 
                seteimg(Natural[i].image)
                setlon(Natural[i].centroid_coordinates.lon)
                setlan(Natural[i].centroid_coordinates.lat)
               
                setx(Natural[i].lunar_j2000_position.x)
                sety(Natural[i].lunar_j2000_position.y)
                setz(Natural[i].lunar_j2000_position.z)

                console.log(Natural[i].centroid_coordinates.lat);
              i++
                // eslint-disable-next-line
              if(i == '20'){
                // eslint-disable-next-line
                i = 0
              }

              }, 3000);
            }


        myFunction()

      }, [])


  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="Earth-main" id="Earthing">
      <h1  className="dark-mode Earthing-text" >
                    
                    {" "} DSCOVR: EPIC{" "}
                        <span className="App-logo">🌍</span>
                    </h1>
        <div className="Earthing-main">



                  <div className="Earthing-text-div">
                  
                    <div className="box">
                          <div className="boxtitle">
                          <h4>Image information </h4>
                          </div>
                        
                          <h5 className="heading">Date</h5>
                              <h5>{date}</h5>
                            
                              <h5 className="heading">Processing Version</h5>
                              <h5>: v5</h5>
                           
                            
                              <h5 className="heading">centroid_coordinates</h5>
                              <h5>lantitude : {lan}</h5>
                              <h5>Longitude : {lon} </h5>
                              
                           
                            
                              <h5 className="heading">lunar position </h5>
                           
                              <h5>X Co. : {x} </h5>
                              <h5>Y Co: {y}</h5>
                              <h5>Z Co : {z}</h5>
                             
                           
                          
                           
                       </div>
                  </div>


          <div className="Earthing-image-div">
           
              <img
                alt="Earth"
                src={eimg}
              ></img>
  {/* <div className="imgsarray">

{imgsarray ? imgsarray.map((img , index)=> 
<img
        alt="Earth"
        src={img}
      ></img>
) : ""}
</div> */}
{/* <h1  className="dark-mode title-text" >
            
            {" "} This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft{" "}
                <span className="App-logo">🌍</span>
            </h1> */}
<h5> This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft{" "}
</h5>

          </div>
        </div>
      
      </div>
      
    </Fade>
  );
}
