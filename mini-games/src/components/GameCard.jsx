import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import twoImg from './2048.png';
import mineImg from './minesweeper.png';
import ticSvg from './tictactoe.svg';

function GameCard ({ title, path }) {
  const history = useHistory();

  let img;
  if (title === '2048') {
    img = twoImg;
  } else if (title === 'Tic Tac Toe') {
    img = ticSvg;
  } else if (title === 'Minesweeper') {
    img = mineImg;
  }
  
  const onClick = () => {
    history.push(path);
  }

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={() => onClick()}>Play!</Button>
      </Card.Body>
    </Card>
  )
}

export default GameCard
