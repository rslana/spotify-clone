import React, { useEffect, useState } from "react";
import {
  Container,
  SongInfo,
  Player,
  PlayerConfig,
  SongName,
  AuthorName,
} from "./styles";
import { findSongById, Song } from "../../api/songs";

const Footer = () => {
  const [song, setSong] = useState<Song>();
  useEffect(() => {
    return setSong(findSongById("1"));
  }, []);

  return (
    <Container>
      <SongInfo>
        <SongName to={`/song/${song?._id}`}>{song?.name}</SongName>
        <AuthorName to={`/author/${song?.author}`}>{song?.author}</AuthorName>
      </SongInfo>
      <Player>Player</Player>
      <PlayerConfig>Player Config</PlayerConfig>
    </Container>
  );
};

export default Footer;
