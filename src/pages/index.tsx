import React from "react";
import { Helmet } from "react-helmet";
import { Container, Title } from "../styles/pages";

export default function Home() {
  return (
    <Container offset>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Home</Title>
    </Container>
  );
}
