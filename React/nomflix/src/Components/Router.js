import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Header from "../Routes/Header";
import Search from "../Routes/Search";

const routes = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      {/* Redirect의 역할은 해당 Router에 일치하는 Route가 없다면 어느 페이지든 받아서 '/'로 보내준다. */}
      </Switch>
    </>
  </Router>
  )

export default routes

