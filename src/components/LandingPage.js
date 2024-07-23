// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register');
  };

  return (
    <div className="landing-page-container">
      <h1 className="landing-page-title">Welcome to FN Money</h1>
      <p className="landing-page-subtitle">Your gateway to financial success</p>
      <button className="call-to-action" onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
};

export default LandingPage;
