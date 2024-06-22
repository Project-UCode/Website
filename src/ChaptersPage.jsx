import React, { useEffect } from 'react';
import logo from './logo.svg';
import Chapters from './Components/Chapters';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function ChaptersPage() {

  return (
    <div>
      <NavBar />
      <Chapters />
      <Footer />
    </div>
  );
}

export default ChaptersPage;