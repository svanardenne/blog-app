// Main Imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Posts from "./core/Posts";
import Post from "./core/Post";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import NewPost from "./admin/NewPost";
import Promises from "./core/Promises";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the_journey" component={Posts} />
        <Route exact path="/the_journey/:slug" component={Post} />
        <Route exact path="/the_promises" component={Promises} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/post/create" component={NewPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
