import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Community from './pages/Community';
import News from './pages/News';
import Portal from './pages/Portal';
import Interactive from './pages/Interactive';


const AppRouter = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/community" element={<Community />} />
      <Route path="/news" element={<News />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/interactive" element={<Interactive />} />
    </Routes>
  </>
);

export default AppRouter;
