import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header/Header'
import './App.css'
import { Routes } from './Routes';

//import StoriesContainer from './containers/StoriesContainer';




export const App = () => {

  return (

    <Router>

      <div className="App">

        <Header />
        <Routes/>
        
      </div>

    </Router>
  )
}

//<StoriesContainer />
