import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home/Home'

export const Routes = () => (

    <Switch>

        <Route path="/" component={Home} />

    </Switch>

)