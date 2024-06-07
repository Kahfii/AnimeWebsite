import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import AnimeDetail from './components/AnimeDetail';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="bg-customBackground min-h-screen">
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<AnimeList searchTerm={searchTerm} />} />
          <Route path="/search/:query" element={<AnimeList searchTerm={searchTerm} />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
