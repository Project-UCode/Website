import React, { useEffect } from 'react';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function ContactPage() {

  return (
    <div>
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;