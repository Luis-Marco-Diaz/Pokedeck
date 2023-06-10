import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../Components/PokemonCard';

const Pokedex = () => {

  const [ pokemonsList, setPokemonsList ] = useState([])
  
  useEffect(() => {
    getData()
    }, [])

    const getData = async () => {
      try {
          const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
          setPokemonsList(resp.data.results)
          } 
      catch (error){
            console.error(error)
            }
    }
  
  return(
    <div className="Pokedex_list" >
      <br />
      <br />
      <h1 className='Pokedex_title'> Entrenador, Bienvenido a tu Pokedex </h1>
      <div className="container_card" >
                 {
                    pokemonsList.map( pokemon => (
                        <PokemonCard 
                        key={ pokemon.name }
                        url={ pokemon.url }
                        />
                    ))
                  }
      </div>
    </div>
  );

};

export default Pokedex;