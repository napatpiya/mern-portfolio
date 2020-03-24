import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Register from './Register';
import Login from './Login';


const SignIn = props => {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br />
          <h1>Pet Shelter</h1>
        </div>
        <div className="col">
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Register />
        </div>
        <div className="col">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default SignIn;