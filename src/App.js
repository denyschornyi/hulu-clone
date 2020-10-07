import React, {useState} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import Trending from './Trending'

import requests from './requests';


function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <Router>
      <div className="app">
      <Header/>

      <Nav setSelectedOption={setSelectedOption}/>

      <Route exact path='/' render={() => <Results selectedOption={selectedOption}/>}/>
      <Route exact path='/trending' render={() => <Trending/>}/>
      </div>
    </Router>
  );
}

export default App;
