import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const PetsList = props => {

  const [pets, setPets] = useState([]);

  const fetchPets = () => {
      axios.get('http://localhost:8000/api/pets')
        .then( res => setPets(res.data) )
        .catch( err => console.log(err) );
  }

  useEffect(() => {
    fetchPets();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br />
          <h1>Pet Shelter</h1>
        </div>
        <div className="col">
          <br />
          <button className="btn btn-primary" onClick={ () => navigate("/new")}>Add a pet to the shelter</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>These pets are looking for a good home</h3>
        </div>
        <div className="col"></div>
      </div>
      <br /><br />
      <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
      {
        pets.map( (pet, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td><Link to={"/pets/"+pet._id}>Detail</Link> | <Link to={"/pets/"+pet._id+"/edit"}>Edit</Link></td>
              </tr>
            </tbody>
          );
        })
      }
      </table>
    </div>
  );
}

export default PetsList;