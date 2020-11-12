import React from 'react';
import './App.css';
// import Navbar from './components/Navbar'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />

      </Switch>
      {/* <Navbar /> */}
      {/* <Home /> */}
      
    </Router>

  );
}

export default App;
