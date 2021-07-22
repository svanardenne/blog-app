// Main Imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Posts from "./core/Posts";
import Doodles from "./core/Doodles";
import Post from "./core/Post";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import NewPost from "./admin/NewPost";
import Promises from "./core/Promises";
import About from "./core/About";

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
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/post/create" component={NewPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
