// Main Imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/core/Home";
import Posts from "./components/core/Posts";
import Doodles from "./components/core/Doodles";
import Post from "./components/core/Post";
import Signin from "./components/user/Signin";
import AdminRoute from "./components/auth/AdminRoute";
import AdminDashboard from "./components/user/AdminDashboard";
import NewPost from "./components/admin/NewPost";
import Promises from "./components/core/Promises";
import About from "./components/core/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the_journey" component={Posts} />
        <Route exact path="/the_journey/:slug" component={Post} />
        <Route exact path="/doodles_and_dawdles" component={Doodles} />
        <Route exact path="/the_promises" component={Promises} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/post/create" component={NewPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
