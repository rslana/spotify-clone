import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid, Title } from "../../../styles/pages";

export default function Artists() {
  return (
    <Container offset>
      <Helmet>
        <title>Artists</title>
      </Helmet>
      <Title>Artists</Title>
      <Grid></Grid>
    </Container>
  );
}
