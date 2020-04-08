import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { BestStories } from './components/BestStories/BestStories'
import { TopStories } from './components/TopStories/TopStories'
import { Home } from './components/Home/Home'
import { SingleStory } from './components/SingleStory/SingleStory'
import { Test } from './components/Test'

/*This component is imported and used in the App component 
to handle all routes throughout the webapp. 

-'/' is used to render the homepage, in this instance that is the new stories.
-'/topstories' is used to render the topstories component.
-'/beststories' is used to render the topstories component.
-'/story/:id' is used to render each indvidual story.
*/

export const Routes = () => {

    return (
        
        <Router>

            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/topstories" component={TopStories}/>
                <Route path="/beststories" component={BestStories}/>
                <Route path="/story/:id" component={SingleStory}/> 

            </Switch>

        </Router>

    )

}