import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetsList from './components/PetsList';
import CreatPet from './views/CreatePet';
import { Router } from '@reach/router';
import DetailPet from './views/DetailPet';
import EditPet from './views/EditPet';
import SignIn from './views/SignIn';

function App() {
  return (
    <div className="App container">
      <Router>
        <SignIn path="/signin" />
        <PetsList path="/" />
        <CreatPet path="/new" />
        <DetailPet path="/pets/:_id" />
        <EditPet path="/pets/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
