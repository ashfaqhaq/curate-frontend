import React from "react";
import { Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";


function Routes() {
  const user = null;
  console.log(user);
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            {user ? <Dashboard /> : <Landing />}
          </Route> */}
         

          <Route exact path="/" component={Landing} />
        
          <Route exact path="/search">
            <Dashboard />
          </Route>
          <Route exact path="/explore">
            <Dashboard />
            {/* <Explore /> */}
          </Route>
          <Route exact path="/roadmap/:roadmapID">
            <Dashboard />
            {/* <Roadmap /> */}
          </Route>
          <Route exact path="/create">
            <Dashboard />
            {/* <CreateRoadmap */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
