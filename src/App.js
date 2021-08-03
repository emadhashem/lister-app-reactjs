import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { action_set_user_id } from './redux/actions/userActions'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginScreen from './screens/auth/login/LoginScreen';
import SignUpScreen from './screens/auth/signup/SignUpScreen';
import "./app.css"
import Layout from './components/app/layout/Layout';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action_set_user_id(1))
  }, [])
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/auth/login' component={LoginScreen} />
          <Route path='/auth/signup' component={SignUpScreen} />


          <Redirect to='/auth/login' />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
