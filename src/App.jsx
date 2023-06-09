import './App.css';
import { HashRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Pokedex from './Pages/Pokedex';
import PokemonDetail from './Pages/PokemonDetail';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import MainLayout from './Components/MainLayout';

function App() {
  
  return (
    <HashRouter>
      <nav>Navegacion</nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route element={ <MainLayout/> } >
            <Route 
                path="/pokedex/:id"
                element={ <PokemonDetail /> } />
            </Route>
        <Route element={<ProtectedRoutes />}> </Route>
        <Route path="/pokedex/:id" element={<PokemonDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
