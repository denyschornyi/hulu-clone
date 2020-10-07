import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Header from './Header';
import Footer from './Footer';
import Results from './pages/Results';

import Trending from './pages/Trending';
import Verified from './pages/Verified';
import Collections from './pages/Collections';
import Account from './pages/Account';




function App() {

  return (
    <Router>
      <div className="app">
        <Header/>

        <Route exact path='/' render={() => <Results/>}/>
        <Route exact path='/trending' render={() => <Trending/>}/>
        <Route exact path='/verified' render={() => <Verified/>}/>
        <Route exact path='/collections' render={() => <Collections/>}/>
        <Route exact path='/search' render={() => <Results/>}/>
        <Route exact path='/account' render={() => <Account/>}/>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
