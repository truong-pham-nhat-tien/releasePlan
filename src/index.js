import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Release0603 from './release-note/release-note-06-03';
import Release1203 from './release-note/release-note-12-03';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/Release_notes_06-03-2020.txt">
        <Release0603 />
      </Route>
      <Route path="/Release_notes_12-03-2020.txt">
        <Release1203 />
      </Route>
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
