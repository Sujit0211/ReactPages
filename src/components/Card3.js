import React from "react";
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 1;

function Card3(){
    return(
        <div class="card2" >
        <div class="card-body">
          <h5 class="card-title">Active Subscriptions</h5>
          <div class="bar">
          <CircularProgressbar value={percentage} strokeWidth={5} text={`${percentage}`} styles={buildStyles({pathColor:'Red',textSize:''})}/>        
          </div>  
          Number of books currently reading
        </div>
      </div>
    );
}
export default Card3;