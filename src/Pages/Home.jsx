import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='Home'>
          <div className='Home-info'>
            <h1>¡Bienvenido Entrenador!</h1>
            <h2>Escribe tu nombre para continuar...</h2>
            <br />
          </div>
          <input type="text" />
        </div>
    );
};

export default Home;