import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles/globals.css";
import Layout from "./components/Layout";

import Home from "./pages";
import Search from "./pages/search";
import Playlists from "./pages/collection/playlists";
import Artists from "./pages/collection/artists";

const App = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify</title>
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/collection/playlists" exact component={Playlists} />
        <Route path="/collection/artists" exact component={Artists} />
      </Switch>
    </Layout>
  );
};

export default App;
