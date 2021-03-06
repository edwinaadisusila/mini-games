import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import TicTacToe from './games/TicTacToe';
import TwoZeroFourEight from './games/TwoZeroFourEight';
import Minesweeper from './games/Minesweeper';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Eddy's Mini Games"/>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/tictactoe'} component={TicTacToe}/>
          <Route path={'/twozerofoureight'} component={TwoZeroFourEight}/>
          <Route path={'/minesweeper'} component={Minesweeper}/>
        </Switch>
        <Footer text="Edwina Adisusila" />
      </div>
    </BrowserRouter>
  );
}

export default App;
