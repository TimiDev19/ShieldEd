import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import learningCard from './pages/learningCard.js';
import landingPage from './pages/LandingPage.js';
import Challenges from './pages/challenges.js';
import coursePage from './pages/coursePage';
import LandingPage from './pages/LandingPage';
import loginPage from './pages/loginPage';
import signupPage from './pages/signupPage';
import newSignup from './pages/newSignup';
import unitCompletion from './pages/unitCompletion.js';
import getStarted1 from './pages/getStarted1.js'
import getStarted2 from './pages/getStarted2.js'
import getStarted3 from './pages/getStarted3.js'
import streak from './pages/streakPage.js';
import successPage from './pages/successPage.js';
import leaderboard from './pages/leaderboard.js';
import privacypolicy from './pages/privacypolicy.js';
import fourthGs from './pages/fourthGs.js';
import fifthStart from './pages/fifthStart.js';
import Shop from './pages/Shop';
import SecondChallenge from './pages/SecondChallenge';
import ReadMore from './pages/Readmore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path="/dashboard" exact Component={Dashboard}/>
        <Route path="/leaderboard" exact Component={leaderboard}/>
        <Route path="/learningCard" exact Component={learningCard}/>
        <Route path="/challenges" exact Component={Challenges}/>
        <Route path="/courses" exact Component={coursePage} />
        <Route path='/loginPage' exact Component={loginPage} />
        <Route path='/fourthGs' exact Component={fourthGs} />
        <Route path='/signup' exact Component={signupPage} />
        <Route path='/readMore' exact Component={ReadMore} />
        <Route path='/newSignup' exact Component={newSignup} />
        <Route path='/successPage' exact Component={successPage} />
        <Route path="/landingPage" exact Component={landingPage} />
        <Route path="/LandingPage" exact Component={LandingPage}/>
        <Route path="/unitCompletion" exact Component={unitCompletion} />
        <Route path="/getStarted1" exact Component={getStarted1} />
        <Route path="/getStarted2" exact Component={getStarted2} />
        <Route path="/getStarted3" exact Component={getStarted3} />
        <Route path="/streakPage" exact Component={streak} />
        <Route path="/privacypolicy" exact Component={privacypolicy} />
        <Route path="/fifthStart" exact Component={fifthStart} />
        <Route path="/shop" exact Component={Shop}/>
        <Route path="/secondChallenge" exact Component={SecondChallenge}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
