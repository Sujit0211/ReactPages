import React from "react";
import Progress5 from "./PieChart";
import "./Card5.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Table } from 'react-bootstrap';

function Card5(){
    const cardStyle = {
        width: '300px', // Set the desired width
        height: '400px', // Set the desired height
      };

    return(
    <Card class="card" style={cardStyle}>
     <Card.Header>Trend Chart</Card.Header>
      <Card.Body>
        <div>
            <Progress5/>
        </div>   
      </Card.Body>
    </Card>
      
    );
}
export default Card5;