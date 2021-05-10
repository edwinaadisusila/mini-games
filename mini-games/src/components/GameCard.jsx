import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function GameCard ({ title, path }) {
  const history = useHistory();
  
  const onClick = () => {
    history.push(path);
  }

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={() => onClick()}>Play!</Button>
      </Card.Body>
      </Card>
  )
}

export default GameCard
