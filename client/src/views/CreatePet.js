import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Create = props => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const like = 0;
  const [errors, setErrors] = useState({});

  const nameCheck = () => {
    axios.get('http://localhost:8000/api/pets/'+name)
      .then( res => {
        if (res.name != null) {
          console.log("Oh Yea!");
          setErrors({"name": "Name already exist!"});
        }
      })
      .catch( err => console.log(err) )
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    nameCheck();
    axios.post('http://localhost:8000/api/pets', {
      name,
      type,
      desc,
      skill1,
      skill2,
      skill3,
      like
    })
      .then(res => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br />
          <h1>Pet Shelter</h1>
        </div>
        <div className="col">
          <br />
          <button type="button" className="btn btn-primary" onClick={ () => navigate("/") }>back to home</button>
        </div>
      </div>
    <div className="row">
      <div className="col">
        <h3>Know a pet needing a home?</h3>
      </div>
      <div className="col"></div>
    </div>
    <br /><br />
    <form  onSubmit={onSubmitHandler}>
      
      <div className="row">
      <div className="col"></div>
      <div className="col-3">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
          {
            errors.name ? 
            <p style={{color: "red"}}><small>{errors.name.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Type</label>
          <input type="text" className="form-control" onChange={e => setType(e.target.value)} />
          {
            errors.type ? 
            <p style={{color: "red"}}><small>{errors.type.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} />
          {
            errors.desc ? 
            <p style={{color: "red"}}><small>{errors.desc.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Skill 1 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Skill 2 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Skill 3 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      <div className="col"></div>
      </div>
    </form>
    </div>
  );
}

export default Create;