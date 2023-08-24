import React from "react";
import './Card1.css';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 200;
function Card1(){
    return(
        <div class="card1" >
        <div class="card-body">
          <h5 class="card-title">Total Points</h5>
          <div class="bar">
          <CircularProgressbar value={percentage} strokeWidth={5} text={`${percentage}`} styles={buildStyles({pathColor:'Red',textSize:''})}/>        
          </div>  
          Points scored by subscription
        </div>
      </div>
    );
}
export default Card1;