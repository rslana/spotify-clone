import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid, Title } from "../../../styles/pages";

export default function Podcasts() {
  return (
    <Container offset>
      <Helmet>
        <title>Podcasts</title>
      </Helmet>
      <Title>Podcasts</Title>
      <Grid></Grid>
    </Container>
  );
}
