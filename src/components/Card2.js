import React from "react";
import './Card2.css';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage1 = 200;
const percentage2 = 2;
const percentage3 = 1;

function Card2(){
    return(
 <section class="mt-3">
    <div class="container">
  <div class="row">
    <div class="col-md-4 mb-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"><strong>Total Points</strong></h5>
          <div class="bar">
          <CircularProgressbar value={percentage1} strokeWidth={5} text={`${percentage1}`} styles={buildStyles({pathColor:'Red',textSize:''})}/>        
          </div>  
          <strong>Points scored by subscription</strong>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"><strong>Books Subscribed</strong></h5>
          <div class="bar">
          <CircularProgressbar value={percentage2} strokeWidth={5} text={`${percentage2}`} styles={buildStyles({pathColor:'Blue',textSize:''})}/>        
          </div>  
          <strong>Number of books Read</strong>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"><strong>Active Subscriptions</strong></h5>
          <div class="bar">
          <CircularProgressbar value={percentage3} strokeWidth={5} text={`${percentage3}`} styles={buildStyles({pathColor:'Green',textSize:''})}/>        
          </div> 
          <strong>Number of books currently reading</strong>
        </div>
      </div>
    </div>
  </div>
</div>
 </section>       

    );
}
export default Card2;