import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Eddy's Mini Games"/>

      <Footer text="Edwina Adisusila" />
    </div>
  );
}

export default App;
