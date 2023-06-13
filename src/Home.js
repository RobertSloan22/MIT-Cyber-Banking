import React, { useState, useEffect } from 'react';
import cyberbank from './cyberbank.jpg';
import './Home.css';  // Import the CSS file

function Home() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container" style={{backgroundImage: `url(${cyberbank})`}}>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{currentDateTime.toLocaleString()} {/* This line will display the current date and time */}</h5>
          <h1>Welcome to CyberBank</h1>
          <p className="lead">Your one-stop solution for all your banking needs.</p>
          <a href="#/Login/" className="btn btn-primary">Go to Account </a>
        </div>
      
        <div className="card-footer text-body-secondary">
          Logged Out 
        </div>
      </div>
     
      <footer className="mt-auto text-white-50">
        <p>CyberBank, a project for MIT xPRO.</p>
      </footer>
    </div>
  );
}
export default Home;
