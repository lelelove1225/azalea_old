import React from 'react';
import Header from "../../organisims/Header/Header"
import './App.css';
import { Router, Route } from 'react-router-dom';
import * as H from "history"

import Home from "../../organisims/Home/Home";
import Blog from "../../organisims/Blog/Blog"

function App() {
  return (
    <div className="App">
      <Router history={H.createBrowserHistory()}>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/blog" component={Blog}/>
      </Router>
    </div>
  );
}

export default App;
