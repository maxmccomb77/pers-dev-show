import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
