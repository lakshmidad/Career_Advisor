import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';
import CareerAdvisor from './components/CareerAdvisor';
import SkillsAssessment from './components/SkillsAssessment';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/career-advisor" component={CareerAdvisor} />
          <Route path="/skills-assessment" component={SkillsAssessment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;