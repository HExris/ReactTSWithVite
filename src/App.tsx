import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "@/views/Home";
import "antd/dist/antd.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
