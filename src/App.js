import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { BestStories } from './components/BestStories/BestStories'
import { TopStories } from './components/TopStories/TopStories'
import { Home } from './components/Home/Home'
import './App.css'

//import StoriesContainer from './containers/StoriesContainer';




export const App = () => {

  return (

    <Router>

      <div className="App">

        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/topstories" component={TopStories}/>
        <Route path="/beststories" component={BestStories}/>
        
      </div>

    </Router>
  )
}

//<StoriesContainer />
