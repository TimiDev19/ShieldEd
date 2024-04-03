import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import learningCard from './pages/learningCard.js';
import landingPage from './pages/LandingPage.js';
import challenges from './pages/challenges.js';
import coursePage from './pages/coursePage';

import LandingPage from './pages/LandingPage';
import loginPage from './pages/loginPage';
import signupPage from './pages/signupPage';
import newSignup from './pages/newSignup';

import { lazy } from 'react';
import successPage from './pages/successPage.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path="/dashboard" exact Component={Dashboard}/>
        <Route path="/learningCard" exact Component={learningCard}/>
        <Route path="/challenges" exact Component={challenges}/>
        <Route path="/courses" exact Component={coursePage} />
        <Route path='/loginPage' exact Component={loginPage} />
        <Route path='/signup' exact Component={signupPage} />
        <Route path='/newSignup' exact Component={newSignup} />
        <Route path='/successPage' exact Component={successPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
