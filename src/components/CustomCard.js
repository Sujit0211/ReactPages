import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Button } from 'react-bootstrap';

function CustomCard({ title, content }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
