
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home'
import One from '../screens/one'
import Login from '../screens/login'

const Routing = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Home' component={Home} />
      <Route path='/One' component={One} />
      <Route path='/Login' component={Login} />
    </Switch>
  </div>
)
export default Routing