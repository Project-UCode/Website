import React, { useEffect } from 'react';
import logo from './logo.svg';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function EventsPage() {

  return (
    <div>
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default EventsPage;