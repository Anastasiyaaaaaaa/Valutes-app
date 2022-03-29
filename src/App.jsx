import './App.css';
import Valutes from './Valutes/Valutes'
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header>
        <NavLink to="/"><span className='navlink'>Главная</span></NavLink> 
        <NavLink to="/Valutes"><span className='navlink'>Валюты</span></NavLink> 
      </header>
      <main>
        <Routes>
          <Route path="/Valutes/*" element={<Valutes />} />  
        </Routes>
      </main>
    </div>
  ); 
}

export default App;
