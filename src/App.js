import React from 'react';

import TrelloJobBoard from './components/TrelloJobBoard';

import './App.css';
// import JobsFromApi from './components/JobsFromApi';

//import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <TrelloJobBoard />
      {/* <JobsFromApi /> */}
      <h1>Home</h1>
    </div>
  );
}

export default App;
