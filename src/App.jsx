import './App.css';
import { HashRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Pokedex from './Pages/Pokedex';
import PokemonDetail from './Pages/PokemonDetail';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import MainLayout from './Components/MainLayout';
import NavBar from './Components/NavBar';

function App() {
  
  return (
    <HashRouter>
      <nav className="navbar">
        <NavBar></NavBar>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route element={ <MainLayout/> } >
            <Route path="/pokedex/:id" element={ <PokemonDetail /> } />
        </Route>
        <Route element={<ProtectedRoutes />}> 
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
        </Route>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
