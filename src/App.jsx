import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from './logo.svg';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import VolunteerPage from './VolunteerPage';
import PartnerPage from './PartnerPage';
import ChaptersPage from './ChaptersPage';
import EventsPage from './EventsPage';
import LivePage from './LivePage';
import CoursesPage from './CoursesPage';
import PythonLivePage from './PythonLivePage';
import LearnPythonPage from './LearnPythonPage';
import BaseLayout from './Layouts/BaseLayout';
import Animations from './Components/Animations';


import './styles/styles.css';

function App() {

  return (
    <div className='App'>
      <Animations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
        <Route path="partner" element={<PartnerPage />} />
        <Route path="chapters" element={<ChaptersPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="live" element={<BaseLayout />}>
          <Route index element={<LivePage />} />
          <Route path="python" element={<PythonLivePage />} />
        </Route>
        <Route path="courses" element={<CoursesPage />} />
        <Route path="pythonlive" element={<PythonLivePage />} />
        <Route path="learnpython" element={<LearnPythonPage />} />
      </Routes>

    </div>
  );
}

export default App;

