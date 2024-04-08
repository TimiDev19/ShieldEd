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

import unitCompletion from './pages/unitCompletion.js';
import getStarted from './pages/getStarted.js'
import { lazy } from 'react';
import successPage from './pages/successPage.js';
import leaderboard from './pages/leaderboard.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path="/dashboard" exact Component={Dashboard}/>
        <Route path="/leaderboard" exact Component={leaderboard}/>
        <Route path="/learningCard" exact Component={learningCard}/>
        <Route path="/challenges" exact Component={challenges}/>
        <Route path="/courses" exact Component={coursePage} />
        <Route path='/loginPage' exact Component={loginPage} />
        <Route path='/signup' exact Component={signupPage} />

        <Route path='/newSignup' exact Component={newSignup} />
        <Route path='/successPage' exact Component={successPage} />
        <Route path="/landingPage" exact Component={landingPage} />
        <Route path="/LandingPage" exact Component={LandingPage}/>
        <Route path="/unitCompletion" exact Component={unitCompletion} />
        <Route path="/getStarted" exact Component={getStarted} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
