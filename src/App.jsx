import { Routes,Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from './logo.svg';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import VolunteerPage from './VolunteerPage';
import ChaptersPage from './ChaptersPage';


import './styles/styles.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
        <Route path="chapters" element={<ChaptersPage />} />
      </Routes>
    </div>
  );
}

export default App;

