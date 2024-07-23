// src/App.js
import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AssessmentForm from './components/AssessmentForm';
import ContactPage from './components/ContactPage'; // Ensure this import is here
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/assessments">Assessment Tasks</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/assessments" element={<AssessmentForm />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
