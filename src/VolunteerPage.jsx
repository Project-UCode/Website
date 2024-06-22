import React, { useEffect } from 'react';
import logo from './logo.svg';
import Volunteer from './Components/Volunteer';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function VolunteerPage() {

  return (
    <div>
      <NavBar />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default VolunteerPage;