import React, {useState} from 'react'
import '../styles/Buton.scss'
const Button = () => {
    const [status, setStatus] = useState('Initiating')
    var statuses = ['Initiating','Active','Error','Complete','Incomplete']
    function randomNumber(a) { 
        return Math.floor(Math.random() * a);
    } 
    console.log(randomNumber(5))
    console.log(statuses[1])
    return (
        
         <div>
            <button  class="checkstatus"  onClick={() => setStatus(statuses[randomNumber(statuses.length)])       
            } style= {{background: status === 'Active' ? '#FFE38E' : status ==='Error' ? 'red' : status==='Complete' ? '#6FCF97' : status==='Incomplete' ? '#FF8C8C' : '#F3F3F3', color : status==='Error' ? 'white' : status!== 'Error' ? '#414141' : '00000'}}   
      >{status}</button>
        </div> 
        
         /* <div class="block__cell">
            <a href="#" class="btn btn--activate" id="btnActivation">
                <span class="btn__icon"></span>
                 <span class="btn__text" data-wait="Waiting" data-after="Activated">Activate</span>
            </a>
        </div> */
         

    )
}
export default Button


 /*

 <div class="campaignActions">
						<div class="onoffswitch" style="opacity: 1;">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
							<label class="onoffswitch-label" for="myonoffswitch" style="cursor: pointer; pointer-events: unset;">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</div>
<div class="onoffswitch" style="opacity: 1;">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
							<label class="onoffswitch-label" for="myonoffswitch" style="cursor: pointer; pointer-events: unset;">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
*/ 