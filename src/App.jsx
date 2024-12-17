import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
import WebDevLivePage from './WebDevLivePage';
import ContactPage from './ContactPage';
import BaseLayout from './Layouts/BaseLayout';
import Animations from './Components/Animations';
import ScrollToTop from './Components/ScrollToTop';

// Python Lessons
import PythonLessonPage from './Components/pythonlessons/Lessons/PythonLessonPage';

import './styles/styles.css';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { pythonlessonlist } from './Components/pythonlessons/PythonLessonList';
import { db } from './fireBaseConfig';

// async function fetchDataFromFirestore() {
//   const querySnapshot = await getDocs(collection(db, "python"))

//   const data = [];
//   querySnapshot.forEach((doc) => {
//     data.push({ id: doc.id, ...doc.data()})
//   });
//   return data;
// }

function App() {
  // const [pythonLessonData, setPythonLessonData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchDataFromFirestore();
  //     setPythonLessonData(data);
  //   }
  //   fetchData();
  //   console.log(pythonLessonData);
  // }, []);
 
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
        <Route path="partner" element={<PartnerPage />} />
        <Route path="chapters" element={<ChaptersPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="live" element={<BaseLayout />}>
          <Route index element={<LivePage />} />
          <Route path="python" element={<PythonLivePage />} />
          <Route path="webdev" element={<WebDevLivePage />} />
        </Route>
        <Route path="courses" element={<BaseLayout />}>
          <Route index element={<CoursesPage />} />
          <Route path="intro-to-python" element={<BaseLayout />}>
            <Route index element={<LearnPythonPage />} />
            <Route path="learn" element={<PythonLessonPage lesson={"lesson"}/>} />
            <Route>
            {pythonlessonlist.map((lessons) => {
              lessons.lessons.map((name,index) => {
                // return (
                  <Route path={name.route} element={<PythonLessonPage lesson={name.name}/>} />
                // );
              })
            })}
            </Route>
          </Route>
        </Route>
        <Route path="pythonlive" element={<PythonLivePage />} />
      </Routes>
      <Animations />
    </div>
  );
}

export default App;

