import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';

function App() {

  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     <UserForm/>
    </div>
  );
}

export default App;
