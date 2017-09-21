import React from 'react'
import { PrivateRoute } from "components/Router";
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import {
  Home,
  About,
} from 'containers'

const BasicExample = () => (
  <Router>
    <Switch>
      <PrivateRoute name='Home' exact breadcrumbName='Home' path="/" component={Home}/>
      <PrivateRoute name='About' exact breadcrumbName='About' path="/about" component={About}/>
    </Switch>
  </Router>
)

export default BasicExample;