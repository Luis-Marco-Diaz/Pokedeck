import { useSelector , useDispatch } from 'react-redux';
import { setname, setValue } from './slices/usersSlice.slice';

// Colocar aquí la lógica para tomar el nombre del Entrenador Pokemon

const Home = () => {

  const user = useSelector(state => state.user )
  useSelector(state=> console.log(state))

  const dispatch = useDispatch();
  const setusername = () => dispatch(setname())

    return (
        <div className='Home'>
          <div className='Home-info'>
            <h1>¡ Bienvenido {user} !</h1>
            <h2>Escribe tu nombre para continuar...</h2>
            <br/>
          </div>
          {/* Aquí va la acción del usuario que dispara el dispatch*/}
          <input type="text" onClick ={setusername}/>
        </div>
    );
};

export default Home;