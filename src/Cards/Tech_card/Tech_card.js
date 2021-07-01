import React  from "react";
import "./Tech_card.css";



export default function Tech_card(props) {

console.log(props);



function onopen() {
    var modal = document.getElementById("myModal");

  modal.style.display = "block";
}

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
    <button onClick={onopen}>
                        <div className="Tech_box">

                            <img  alt="Earth" src={props.img} />
                            <h5>{props.Name}</h5>
                            <h6>{props.Type}</h6>

                        </div>
                        </button>

      <div id="myModal" class="modal">

<div class="modal-content">
 <span onClick={onclose} class="close">&times;</span>

                            <img  alt="Earth" src={props.img} />
                            <h5>{props.Name}</h5>
                            <h6>{props.Type}</h6>
                            <p>{props.Des}</p>


                
 
</div>

</div>

      </>
                      
  );
}
