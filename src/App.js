import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import learningCard from './pages/learningCard.js';
import challenges from './pages/challenges.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact Component={Dashboard}/>
        <Route path="/learningCard" exact Component={learningCard}/>
        <Route path="/challenges" exact Component={challenges}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
