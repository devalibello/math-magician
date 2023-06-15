import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/calculator" Component={Calculator} />
        <Route path="/quote" Component={Quote} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
