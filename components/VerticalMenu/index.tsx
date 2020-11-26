import React from "react";
import { Container, Logo } from "./styles";
import * as SvgIcons from "../Icons";

export default function VerticalMenu() {
  return (
    <Container>
      <Logo>
        <SvgIcons.Spotify />
      </Logo>
      <br />
      <a href="#">Home</a>
      <br />
      <a href="#">Search</a>
      <br />
      <a href="#">Your Library</a>
    </Container>
  );
}
