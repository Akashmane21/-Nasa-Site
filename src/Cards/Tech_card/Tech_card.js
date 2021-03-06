import React ,{useState}  from "react";
import Techshort from "../../LocalApi's/Techshort";
import "./Tech_card.css";
import Zoom from 'react-reveal/Zoom';



export default function Tech_card() {

// eslint-disable-next-line
const [Techapi, setTechapi] = useState(Techshort)

const [modalimg, setmodalimg] = useState("")
const [modaldes, setmodaldes] = useState("")
const [modalname, setmodalname] = useState("")
const [modaltype, setmodaltype] = useState("")

function onclose() {
    console.log("closed");
    var modal = document.getElementById("myModal");

  modal.style.display = "none";
}

window.onclick = function(event) {
    // eslint-disable-next-line
  if (event.target == modal) {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
  }
}

  return (
      <>
             
<div className="bigbtn">
       {Techapi.map((Tech) => (
    <button onClick={()=>{
         setmodalimg(Tech.img)
         setmodaldes(Tech.Des)
         setmodalname(Tech.Name)
         setmodaltype(Tech.Type)
    var modal = document.getElementById("myModal");

  modal.style.display = "block";
    }}>
     <Zoom top>
                        <div className="Tech_box">

                            <img  alt={Tech.Name}   src={Tech.img} />
                            <h5>{Tech.Name}</h5>
                            <h6>{Tech.Type}</h6>

                        </div>
                        </Zoom>
                        </button>
       ))}

      <div id="myModal" class="modal">

              <div class="modal-content">
                            <span onClick={onclose} class="close">  &times;</span>
                            <h1>{modaltype}</h1>

                            <img  alt={modalname} src={modalimg} />
                            <h5>{modalname}</h5>
                            {/* <h6>Type : {modaltype}</h6> */}
                            <p>{modaldes}</p>

             </div>

     </div>
     </div>
      </>
                      
  );
}
