import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import AlumniDirectory from './components/AlumniDirectory';
import AlumniProfile from './components/AlumniProfile';
import JobBoard from './components/JobBoard';
import Events from './components/Events';
import Campaigns from './components/Campaigns';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <div className="relative z-10">
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
              <Route path="/" element={<Navigate to="/alumni" />} />
              <Route path="/alumni" element={<AlumniDirectory />} />
              <Route path="/alumni/:id" element={<AlumniProfile />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;