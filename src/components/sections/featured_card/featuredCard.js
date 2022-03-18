import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { EditText, EditTextarea } from 'react-edit-text';

import 'react-edit-text/dist/index.css';

const FeaturedCard = () => {
    return(
        <Card className="text-center">
  <Card.Header><EditText defaultValue='Featured'/></Card.Header>
  <Card.Body>
    <Card.Title><EditText defaultValue='Special title treatment'/></Card.Title>
    <Card.Text>
      <EditTextarea rows={3} defaultValue='With supporting text below as a natural lead-in to additional content.'/>
    </Card.Text>
    <Button variant="primary"><EditText defaultValue='Go somewhere'/></Button>
  </Card.Body>
  <Card.Footer className="text-muted"><EditText defaultValue='Limited Time Offer exp: 10/25/22'/></Card.Footer>
</Card>
    )
};

export default FeaturedCard;