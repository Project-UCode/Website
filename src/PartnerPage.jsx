import React, { useEffect } from 'react';
import logo from './logo.svg';
import Partner from './Components/Partner';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function PartnerPage() {

  return (
    <div>
      <NavBar />
      <Partner />
      <Footer />
    </div>
  );
}

export default PartnerPage;