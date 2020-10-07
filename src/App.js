import React, {useState} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Results from './pages/Results';

import Trending from './pages/Trending';
import Verified from './pages/Verified';
import Collections from './pages/Collections';
import Search from './pages/Search';
import Account from './pages/Account';

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
      <Route exact path='/verified' render={() => <Verified/>}/>
      <Route exact path='/collections' render={() => <Collections/>}/>
      <Route exact path='/search' render={() => <Search/>}/>
      <Route exact path='/account' render={() => <Account/>}/>

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
