import React from "react";
import "./Card4.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Table } from 'react-bootstrap';


function Card4(){
    return(
    <Card class="card">
     <Card.Header><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Top Subscribers by points</strong></Card.Header>
    <Card.Body>
     <table class="table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tanmay Sant</td>
      <td>1900</td>
    </tr>
    <tr>
      <td>Biswajit Mishra</td>
      <td>1891</td>
    </tr>
    <tr>
      <td >Ankur Sharma</td>
      <td>1700</td>
    </tr>
    <tr>
      <td >Preeti Pathak</td>
      <td>1500</td>
    </tr>
    <tr>
      <td >Milan Banerjee</td>
      <td>1200</td>
    </tr>
  </tbody>
</table>
</Card.Body>
</Card>
);
}
export default Card4;