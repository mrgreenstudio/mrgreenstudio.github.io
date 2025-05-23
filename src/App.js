import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Games from './pages/Games';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/games" element={<Games />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;