import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles/globals.css";
import Layout from "./components/Layout";

import Home from "./pages";
import Collection from "./pages/collection";
import Search from "./pages/search";

const App = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify</title>
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collection/:page" exact component={Collection} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Layout>
  );
};

export default App;
