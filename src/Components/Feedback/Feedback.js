import React  from "react";
import Bounce from 'react-reveal/Bounce';
// import SocialMedia from "../socialMedia/SocialMedia";
// import "./Feedback.css";
import './feedback.css'
export default function Feedback() {

function Add(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
        alert("Your Data📝 is Sending.... plz Wait💕")
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting📞 me..! I Will Contact You Soon...💖"))
        .catch(error => console.error('Error!', error.message))
    })
}
    

  return (
    <Bounce bottom>
   <div id="Feedbacking" >
   
 <h1 className="photo" >
                            
                            {" "} Leave us a Valuable Feedback{" "}
                                <span className="wave-emoji">📝</span>
                            </h1>
      <div className="Feedback-main" >
  
        <div className="Feedbacking-main">


                <div className="Feedbacking-image-div">
                {/* <DisplayLottie animationData={email} /> */}

                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_cdvdgap1.json"  background="transparent"  speed="1" style={{ height: "250px"}}  loop  autoplay />




                            
                
                    </div>

       
          <div className="Feedbacking-text-div">
           


          <div class="box-div">
    <div class="box">
        <form method="post" autocomplete="off" name="google-sheet">

                <h2>Name:</h2>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" name="Name" class="form-control" placeholder="Name " aria-label="Username" aria-describedby="basic-addon1" />
                </div>        <br />
                <h2>Description</h2>
                <textarea  name = "Message" placeholder="Type your Feedback here.." class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <br />
                <button type="submit" class="btn btn-primary mb-2" onClick={Add} >Submit</button>
</form>
    </div>
</div>

         
           
          </div>
        

        </div>
        
      </div>
  
</div>
          </Bounce>
  );
}
