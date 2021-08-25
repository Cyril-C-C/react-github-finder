import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import UserSingle from './Components/User/UserSingle';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';

import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about/' component={About} />
                <Route exact path='/user/:login/' component={UserSingle} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
