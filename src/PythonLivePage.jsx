import React, { useEffect } from 'react';
import logo from './logo.svg';
import PythonLive from './Components/PythonLive';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function PythonLivePage() {

  return (
    <div>
      <NavBar />
      <PythonLive />
      <Footer />
    </div>
  );
}

export default PythonLivePage;