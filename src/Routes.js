import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Landing from "./pages/Landing";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Roadmap from "./pages/Roadmap";

function Routes() {
  const { user } = useAuth0();

  console.log(user);
  return (
    <Switch>
      <Route exact path="/">
        {user ? <Explore /> : <Landing />}
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/roadmap/:_id">
        <Roadmap />
      </Route>
    </Switch>
  );
}

export default Routes;
