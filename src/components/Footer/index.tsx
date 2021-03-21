import React from "react";
import { Container } from "./styles";
import Player from "../Player";
import PlayerConfig from "../PlayerConfig";
import SongInfo from "../SongInfo";

const Footer = () => {
  return (
    <Container>
      <SongInfo />
      <Player />
      <PlayerConfig />
    </Container>
  );
};

export default Footer;
