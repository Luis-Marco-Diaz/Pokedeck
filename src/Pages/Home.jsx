import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setname, setValue } from '../store/slices/usersSlice.slice';
// Colocar aquí la lógica para tomar el nombre del Entrenador Pokemon

const Home = () => {

  const user = useSelector(state => state.user )
  useSelector(state=> console.log(state))

  const dispatch = useDispatch();
  const setusername = () => dispatch(setname())

  const [ value, setValue ] = useState()

    return (
        <div className='Home'>
          <div className='Home-info'>
            <h1>¡ Bienvenido {user} !</h1>
            <h2>Escribe tu nombre para continuar...</h2>
            <br/>
          </div>
          {/* Aquí va la acción del usuario que dispara el dispatch*/}
          <form action="">
          <input value={ value } type="text" />
          <input type="submit" onChange={ (e) => setValue( e.target.value ) } />
          </form>
        </div>
    );
};

export default Home;