import React, { useEffect } from 'react';
import logo from './logo.svg';
import WebDevLive from './Components/WebDevLive';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function WebDevLivePage() {

  return (
    <div>
      <NavBar />
      <WebDevLive />
      <Footer />
    </div>
  );
}

export default WebDevLivePage;