import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const DetailPet = props => {

  const [name, setName] = useState("");
  const [type, setType] = useState();
  const [desc, setDesc] = useState();
  const [skill1, setSkill1] = useState();
  const [skill2, setSkill2] = useState();
  const [skill3, setSkill3] = useState();
  const [checkLike, setCheckLike] = useState(true);
  const [count, setCount] = useState(0);

  const fetchPets = () => {
    axios.get('http://localhost:8000/api/pets/'+ props._id)
          .then(res => {
              setName(res.data.name);
              setType(res.data.type);
              setDesc(res.data.desc);
              setSkill1(res.data.skill1);
              setSkill2(res.data.skill2);
              setSkill3(res.data.skill3);
              setCount((res.data.like));
          }).catch(err => console.log(err));
}

  useEffect(() => {
    fetchPets();
  }, [])

  const updatePet = () => {
      const like = count+1;
      setCount(count+1);
      setCheckLike(false);
      axios.put('http://localhost:8000/api/pets/'+ props._id, {
          name,
          type,
          desc,
          skill1,
          skill2,
          skill3,
          like
      })
      .then(res => fetchPets)
      .catch(err => console.log(err));
  }  

  const deletePet = () => {
    axios.delete('http://localhost:8000/api/pets/' + props._id)
    .then(res => navigate("/"));
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
          <button className="btn btn-primary" onClick={ () => navigate("/") }>back to home</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Details about: {name}</h3>
        </div>
        <div className="col">
          <button className="btn btn-danger" onClick={deletePet}>Adopt {name}</button>
        </div>
      </div>
      <br /><br />
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Pet Type:</th>
                <td>{type}</td>
              </tr>
              <tr>
                <th scope="row">Description:</th>
                <td>{desc}</td>
              </tr>
              <tr>
                <th scope="row">skills:</th>
                <td>
                  <ul className="list-group">
                    <li className="list-group-item">{skill1}</li>
                    <li className="list-group-item">{skill2}</li>
                    <li className="list-group-item">{skill3}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
      <br />
      <div className="row">
        <div className="col"></div>
        <div className="col">
          {
            checkLike ? <button type="button" className="btn btn-secondary" onClick={updatePet}>Like {name}</button> :
            <button type="button" className="btn btn-secondary disabled">Like {name}</button>
          }
        </div>
        <div className="col">
          <p>{count} like(s)</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default DetailPet;