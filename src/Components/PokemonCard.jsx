import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ url }) => {

    const [ data, setData ] = useState({})
    
    useEffect(() => {
        
      getPokemonDetail()
      // eslint-disable-next-line
    }, []) 


    const getPokemonDetail = async () => {
        try{
            const resp = await axios.get( url )
            setData(resp.data)

        }catch(error){
            console.error( error )
        }
    }

    return (
        <Link to={`/Pokedex/${data.id}`}>
            <div className={`pokemon-card`}>
                <div>
                    <div className="card_img" >
                        <img src={data.sprites?.front_default} alt="" />
                    </div>
                </div>
                <section >
                    <h1>{data.name}</h1>
                    <h2>Pokemon Card</h2>
                </section>
            </div>
        </Link>
    );
};

export default PokemonCard;