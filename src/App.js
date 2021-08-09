import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { action_set_user_id } from './redux/actions/userActions'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginScreen from './screens/auth/login/LoginScreen';
import SignUpScreen from './screens/auth/signup/SignUpScreen';
import "./app.css"
import Layout from './components/app/layout/Layout';
import PublicRoute from './components/restrictions/PublicRoute';
import PrivateRoute from './components/restrictions/PrivateRoute';
import HomeScreen from './screens/app/HomeScreen'
function App() {
 
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute path='/auth/login' component={LoginScreen} />
          <PublicRoute path='/auth/signup' component={SignUpScreen} />

          <PrivateRoute path = "/member/home" component = {HomeScreen} />
          <Redirect to='/auth/login' />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
