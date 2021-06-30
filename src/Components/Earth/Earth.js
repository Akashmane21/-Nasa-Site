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


      useEffect(() => {


        
            function myFunction() {
              setInterval(function(){ 
                console.log(i);
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
        console.log(Natural[0].image);

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
                          <table >
                         
                            <tr>
                              <td><h5>Processing Version</h5></td>
                              <td><h5>: v5</h5></td>
                            </tr>
                            <tr>
                              <td><h5>centroid_coordinates</h5></td>
                              {/* <td><h5>: 1,584,520 km</h5></td> */}
                            </tr>
                            <tr>
                              <td><h5>lantitude</h5></td>
                              <td><h5>: {lan}</h5></td>
                            </tr>

                            <tr>
                              <td><h5>Longitude  </h5></td>
                              <td><h5>: {lon}</h5></td>
                            </tr>
                            <tr>
                              <td><h5>lunar position </h5></td>
                            </tr>
                            <tr>
                              <td><h5>X Co. </h5></td>
                              <td><h5>: {x}</h5></td>
                            </tr><tr>
                              <td><h5>Y Co</h5></td>
                              <td><h5>: {y}</h5></td>
                            </tr><tr>
                              <td><h5>Z Co</h5></td>
                              <td><h5>: {z}</h5></td>
                            </tr>
                           
                          </table>
                           
                       </div>
                  </div>


          <div className="Earthing-image-div">
           
              <img
                alt="man sitting on table"
                src={eimg}
              ></img>

          </div>
        </div>
      </div>
      
    </Fade>
  );
}
