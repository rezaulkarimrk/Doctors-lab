import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home></Home>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
