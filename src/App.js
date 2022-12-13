import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { ListUser } from './components/List/ListUser';
import { AddUser } from './components/users/AddUser';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/list_user' element={<ListUser />} />
        <Route path='/add_user' element={<AddUser />} />
      </Routes>
    </>
  );
};
