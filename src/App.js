import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={SearchPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;