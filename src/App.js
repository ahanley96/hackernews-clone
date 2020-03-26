import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import StoriesContainer from './containers/StoriesContainer';
//import StoriesContainer from './containers/StoriesContainer';

import { Routes } from './router'
import { Header } from './components/Header/Header'

export const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  )
}

//<StoriesContainer />
