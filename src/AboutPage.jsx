import React, { useEffect } from 'react';
import logo from './logo.svg';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function AboutPage() {

  return (
    <div>
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;