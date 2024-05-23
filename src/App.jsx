//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
