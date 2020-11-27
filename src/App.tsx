import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/globals.css";
import Layout from "./components/Layout";

import Home from "./pages";
import Playlist from "./pages/playlist";
import Search from "./pages/search";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlist" exact component={Playlist} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Layout>
  );
};

export default App;
