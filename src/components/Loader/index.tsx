import React from "react";
import { Container, LoaderBullet } from "./styles";

const Loader = () => {
  return (
    <Container>
      <LoaderBullet />
      <LoaderBullet />
      <LoaderBullet />
    </Container>
  );
};

export default Loader;
