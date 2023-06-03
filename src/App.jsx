import './App.css';
import { HashRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';


// Hacer una animación con CSS de Pokemones caminando en el pasto de fondo
// Colocar un brake para que en dispositivos móviles el background cambie
// ¿Se puede poner un background en movimiento?
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
