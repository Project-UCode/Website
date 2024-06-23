import React, { useEffect } from 'react';
import logo from './logo.svg';
import Events from './Components/Events';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function EventsPage() {

  return (
    <div>
      <NavBar />
      <Events />
      <Footer />
    </div>
  );
}

export default EventsPage;