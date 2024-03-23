import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import learningCard from './pages/learningCard.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact Component={Dashboard}/>
        <Route path="/learningCard" exact Component={learningCard}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
