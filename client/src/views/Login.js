import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Login = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', {email, password})
      .then(res => console.log(res))
      .catch( err => console.log(err) );
  }

  return (
    <div className="container">
      <br /><br />
      <h3>Login</h3>
      <form onSubmit={login} style={{border: "1px solid black", padding: "20px"}}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" onChange={ e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" onChange={ e => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <br />
      {
        errorMessage.length > 0 ?
        <p style={{color: "red"}}><small>{errorMessage}</small></p> :
        ""
      }
    </form>
    </div>
    
  );
}

export default Login;