import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

// Components
import Account from './components/Account'
import RecordDashboard from './components/RecordDashboard'
import AppWithRouterAccess from './AppWithRouterAccess';


function App() {
  return (
    <div className="App">
      {/* <Link to='/account'>Account</Link> */}
      {/* <Link to='/dashboard'>Dashboard</Link> */}
      <header className="App-header">
        {/* <Route path='/account' component={Account} /> */}
        {/* <Route path='/dashboard' component={RecordDashboard} /> */}
        <AppWithRouterAccess/>

      </header>
    </div>
  );
}

export default App;
