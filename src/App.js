import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};
