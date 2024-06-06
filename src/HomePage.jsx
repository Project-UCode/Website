import React, { useEffect } from 'react';
import logo from './logo.svg';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function HomePage() {

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;

