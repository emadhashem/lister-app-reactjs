import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {action_set_user_id} from './redux/actions/userActions'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action_set_user_id(1))
  },[])
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
