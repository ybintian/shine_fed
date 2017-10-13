import React from 'react'
import { PrivateRoute } from "components/Router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Home,
  About,
  WrappedLogin,
  NotFoundPage,
  User,
} from 'containers'

const BasicExample = () => (
  <Router>
    <Switch>
      <PrivateRoute name='Home' exact breadcrumbName='Home' path="/" component={Home}/>
      <PrivateRoute name='About' exact breadcrumbName='About' path="/about" component={About}/>
      <PrivateRoute name='WrappedLogin' exact breadcrumbName='Login' path="/login" component={WrappedLogin}/>
      <PrivateRoute name='User' exact breadcrumbName='User' path="/user" component={User}/>
      <PrivateRoute component={NotFoundPage}/>
    </Switch>
  </Router>
)

export default BasicExample;