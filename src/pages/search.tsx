import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid } from "../styles/pages";

export default function Search() {
  return (
    <Container>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <h1>Search</h1>
      <Grid></Grid>
    </Container>
  );
}
