import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Helpers/routes';
import './App.scss';
import Navigation from '../Components/Navigation';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
