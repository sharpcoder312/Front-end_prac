import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

const routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" exact render={() => <h1>Popular</h1>} />
      <Route path="/search" exact component={Search} />
      <Redirect from="*" to="/" />
      {/* Redirect의 역할은 해당 Router에 일치하는 Route가 없다면 어느 페이지든 받아서 '/'로 보내준다. */}
    </Switch>
  </Router>
  )

export default routes

