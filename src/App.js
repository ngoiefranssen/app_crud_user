import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Profil } from './components/profil/Profil';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>
    </>
  );
};
