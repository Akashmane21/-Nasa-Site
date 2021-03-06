import React from 'react'
import './Slider.css'
function Slider() {
    return (
        <div>
            

	<div class="section full-height over-hide px-4 px-sm-0">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div class="section mx-auto text-center slider-height-padding">
			          	<input class="checkbox frst" type="radio" id="slide-1" name="slider" checked/>
			          	<label for="slide-1"></label>
			          	<input class="checkbox scnd" type="radio" name="slider" id="slider-2"/>
			          	<label for="slider-2"></label>
			          	<input class="checkbox thrd" type="radio" name="slider" id="slider-3"/>
			          	<label for="slider-3"></label>
			          	<input class="checkbox foth" type="radio" name="slider" id="slider-4"/>
			          	<label for="slider-4"></label>
						<ul>
							<li>
								<span>Nasa Photo Gallary</span>
						    </li>
							<li>
								<span>Nasa Photo Gallary</span>
						    </li>
							<li>
								<span>Nasa Photo Gallary</span>
						    </li>
							<li>
								<span>Nasa Photo Gallary</span>
						    </li>
					    </ul>
				    </div>
			    </div>
	      	</div>
	    </div>
	</div>
        </div>
    )
}

export default Slider
