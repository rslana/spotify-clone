import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid, Title } from "../../styles/pages";

export default function Search() {
  return (
    <Container offset>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Title>Search</Title>
      <Grid></Grid>
    </Container>
  );
}
