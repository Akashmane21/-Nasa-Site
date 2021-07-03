import React ,{useState}  from "react";
import "./Tech_cardpage.css";
import Zoom from 'react-reveal/Zoom';
import Tech from "../../LocalApi's/Tech";



export default function Tech_cardpage() {

// eslint-disable-next-line
const [Techapi, setTechapi] = useState(Tech)

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
      </>
                      
  );
}
