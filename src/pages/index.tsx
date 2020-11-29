import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../styles/pages";

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
    </Container>
  );
}
