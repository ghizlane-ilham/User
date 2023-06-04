import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Statistique from './pages/Statistique';
import Calendrier from './pages/Calendrier';
import Taches from './pages/Taches';
import SignInSide from './pages/login';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Router> */}
      <Routes>
        <Route path='/taskes' exact  element={ <Taches/>} />
        <Route path='/Statistique' element={ <Statistique />} />
        <Route path='/login' element={ <SignInSide/>} />
        <Route path='/profile' element={ <Profile/>} />
      </Routes>
    {/* </Router> */}
    </>
  );
}

export default App;
