import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid, Title } from "../../../styles/pages";

export default function Albums() {
  return (
    <Container offset>
      <Helmet>
        <title>Albums</title>
      </Helmet>
      <Title>Albums</Title>
      <Grid></Grid>
    </Container>
  );
}
