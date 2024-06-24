import React, { useEffect } from 'react';
import logo from './logo.svg';
import Courses from './Components/Courses';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import './styles/styles.css';

function CoursesPage() {

  return (
    <div>
      <NavBar />
      <Courses />
      <Footer />
    </div>
  );
}

export default CoursesPage;