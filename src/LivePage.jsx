import React, { useEffect } from 'react';
import logo from './logo.svg';
import Live from './Components/Live';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function LivePage() {

  return (
    <div>
      <NavBar />
      <Live />
      <Footer />
    </div>
  );
}

export default LivePage;