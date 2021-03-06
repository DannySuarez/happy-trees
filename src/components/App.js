import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../containers/Home/Home.js';
import Game from '../containers/Game/GamePage';
import Landing from '../containers/LandingContainer/LandingContainer';
import Results from '../containers/Results/Results';
import { WithSession } from './WithSession';
import './app.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={WithSession(Game)}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/results" component={WithSession(Results)} />
        <Route path="/" component={WithSession(Home)}/>
      </Switch>
    </Router>
  );
}


