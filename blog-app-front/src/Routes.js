import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./core/Menu";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
