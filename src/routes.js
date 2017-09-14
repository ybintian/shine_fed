import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  Home,
  About,
} from 'containers'

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default BasicExample;