import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = props => {

  const [name, setName] = useState("");
  const [type, setType] = useState();
  const [desc, setDesc] = useState();
  const [skill1, setSkill1] = useState();
  const [skill2, setSkill2] = useState();
  const [skill3, setSkill3] = useState();
  const [like, setLike] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
      axios.get('http://localhost:8000/api/pets/'+ props._id)
          .then(res => {
              setName(res.data.name);
              setType(res.data.type);
              setDesc(res.data.desc);
              setSkill1(res.data.skill1);
              setSkill2(res.data.skill2);
              setSkill3(res.data.skill3);
              setLike(res.data.like);
          }).catch(err => console.log(err));
  }, []);

  const updatePet = e => {
      e.preventDefault();
      axios.put('http://localhost:8000/api/pets/'+ props._id, {
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
          navigate(`/pets/${props._id}`);
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
        <h3>Edit {name}</h3>
      </div>
      <div className="col"></div>
    </div>
    <br /><br />
    <form  onSubmit={updatePet}>
      <div className="row">
      <div className="col"></div>
      <div className="col-3">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
          {
            errors.name ? 
            <p style={{color: "red"}}><small>{errors.name.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Type</label>
          <input type="text" className="form-control" onChange={e => setType(e.target.value)} value={type} />
          {
            errors.type ? 
            <p style={{color: "red"}}><small>{errors.type.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} value={desc} />
          {
            errors.desc ? 
            <p style={{color: "red"}}><small>{errors.desc.message}</small></p> :
            ""
          }
        </div>
        <div className="form-group">
          <label>Skill 1 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} value={skill1} />
        </div>
        <div className="form-group">
          <label>Skill 2 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} value={skill2} />
        </div>
        <div className="form-group">
          <label>Skill 3 (Optional)</label>
          <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} value={skill3} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      <div className="col"></div>
      </div>
    </form>
    </div>
  );
}

export default Update;