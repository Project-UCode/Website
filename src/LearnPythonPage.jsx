import React, { useEffect } from 'react';
import logo from './logo.svg';
import LearnPython from './Components/pythonlessons/LearnPython';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function LearnPythonPage() {

  return (
    <div>
      <NavBar />
      <LearnPython />
      <Footer />
    </div>
  );
}

export default LearnPythonPage;