import {HashRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setname } from '../store/slices/usersSlice.slice';
import Pokedex from './Pages/Pokedex';

const navigate = useNavigate();
const navigateToPokedex = () => {
    navigate('/pokedex');
  };
const Home = () => {

  const user = useSelector(state => state.user )
  const dispatch = useDispatch()
  const [ nameValue, setNameValue ] = useState( "" )

    return (
        <div className='Home'>
          <div className='Home-info'>
            <h1>¡Bienvenido {user} !</h1>
            <h2>Escribe tu nombre para continuar...</h2>
            <br/>
          </div>
          <input 
          type="text" 
          id="name"
          value={ nameValue }
          onChange= { e => setNameValue(e.target.value) }
          />
          <button 
          className='button' 
          onClick={ () => dispatch( setname(nameValue) ) } 
          onClick={navigateToPokedex}
            >
          Entrar
          </button>
          <br />
          <div>
          <Link className='Link' to="/pokedex">Ir al listado de Pokemones</Link>
          </div>
        </div>
    );
};

export default Home;
