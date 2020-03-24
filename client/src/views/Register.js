import React, { useState } from 'react';

const Register = props => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <div className="container">
      <br /><br />
      <h3>Register</h3>
      <form style={{border: "1px solid black", padding: "20px"}}>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" onChange={ e => setFirstName(e.target.value)} />
        {
          errors.firstName ?
          <p style={{color: "red"}}><small>{errors.firstName.message}</small></p> :
          ""
        }
        </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" onChange={ e => setLastName(e.target.value)} />
              {
                errors.lastName ?
                <p style={{color: "red"}}><small>{errors.lastName.message}</small></p> :
                ""
              }
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" onChange={ e => setEmail(e.target.value)} />
              {
                errors.email ?
                <p style={{color: "red"}}><small>{errors.email.message}</small></p> :
                ""
              }
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" onChange={ e => setPassword(e.target.value)} />
              {
                errors.password ?
                <p style={{color: "red"}}><small>{errors.password.message}</small></p> :
                ""
              }
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" onChange={ e => setConfirmPassword(e.target.value)} />
              {
                errors.confirmPassword ?
                <p style={{color: "red"}}><small>{errors.confirmPassword.message}</small></p> :
                ""
              }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    </div>
    
  );
}

export default Register;