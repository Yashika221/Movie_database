import './App.css';
import react, { useState } from 'react';
import "./components/Style.css";
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/MovieDetails';
import Navbar from './components/Navbar';

/* React routers used to give exact path or route of any file */
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
