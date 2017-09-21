import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import {
  Home,
  About,
} from 'containers'
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()
const BasicExample = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default BasicExample;