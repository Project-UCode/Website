import React, { useEffect } from 'react';
import logo from './logo.svg';
import LearnPython from './Components/LearnPython';
import LearnNavBar from './Components/LearnNavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function LearnPythonPage() {

  return (
    <div>
      <LearnPython />
      <Footer />
    </div>
  );
}

export default LearnPythonPage;