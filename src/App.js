import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import learningCard from './pages/learningCard.js';
import landingPage from './pages/LandingPage.js';
import challenges from './pages/challenges.js';
import coursePage from './pages/coursePage';
<<<<<<< HEAD

import LandingPage from './pages/LandingPage';
import loginPage from './pages/loginPage';
import signupPage from './pages/signupPage';

=======
>>>>>>> 28d36598080cc3dbd72b36b095738cbd1ae6abb0
import { lazy } from 'react';



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
<<<<<<< HEAD
        <Route path='/loginPage' exact Component={loginPage} />
        <Route path='/signup' exact Component={signupPage} />
=======
        <Route path="/landingPage" exact Component={landingPage} />
        <Route path="/LandingPage" exact Component={LandingPage}/>
>>>>>>> 28d36598080cc3dbd72b36b095738cbd1ae6abb0
        </Routes>
      </Router>
    </div>
  );
}

export default App;
