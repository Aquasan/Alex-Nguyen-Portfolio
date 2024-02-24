import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contacts' component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;