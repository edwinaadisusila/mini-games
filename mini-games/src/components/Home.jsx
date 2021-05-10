import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GameCard from './GameCard';

function Home() {
  return (
    <Container>
      <Row style={{justifyContent: 'center'}}>
        <GameCard title='Tic Tac Toe' path='/tictactoe'/>
        <GameCard title='2048' path='/twozerofoureight'/>
        <GameCard title='Tetris' path='/tetris' />
      </Row>
    </Container>
  );
}

export default Home;
