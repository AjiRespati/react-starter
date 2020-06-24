
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home'
import One from '../screens/one'

const Routing = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Home' component={Home} />
      <Route path='/One' component={One} />
    </Switch>
  </div>
)
export default Routing