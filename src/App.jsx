import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/navigationbar';
import Mainscreen from './components/mainscreen';
import About from './components/About';
import ProjectDone from './components/projectsDone';
import Contact from './components/Contact';
import MiniProjectsDone from './components/miniprojects';
import OpenSource from './components/opensource';

import Footer from './components/footer'; 
import Skillset from './components/skillset';


function App() {
  return (
    <main>
        <Router>
          <div className="bg-white dark:bg-black">
            <Navigationbar/>
            <Routes>
              <Route path="/" element={<Mainscreen/>} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectDone />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skillset />} />
              <Route path="/miniproject" element={<MiniProjectsDone />} />
              <Route path="/opensource" element={<OpenSource />} />
            </Routes>
            <Footer />
          </div>
        </Router>
    </main>
  );
}

export default App;