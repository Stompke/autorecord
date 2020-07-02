import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

// Components
import Account from './components/Account'

function App() {
  return (
    <div className="App">
      <Link to='/account'>Account</Link>
      <header className="App-header">
        <Route path='/account' component={Account} />
      <h1>Auto Record</h1>
      </header>
    </div>
  );
}

export default App;
