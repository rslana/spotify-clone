import React, { useEffect, useState } from "react";
import {
  Container,
  SongInfo,
  Player,
  PlayerConfig,
  SongName,
  AuthorName,
  Album,
  Wrapper,
} from "./styles";
import { findSongById, Song } from "../../api/songs";
import { usePlayer } from "../../contexts/player";

const Footer = () => {
  const [song, setSong] = useState<Song>();
  const { showAlbum, setShowAlbum } = usePlayer();
  useEffect(() => {
    return setSong(findSongById("1"));
  }, []);

  return (
    <Container>
      <SongInfo>
        {!!song && (
          <Album
            cover={song.cover}
            show={showAlbum}
            onClick={() => setShowAlbum(!showAlbum)}
          />
        )}
        <Wrapper>
          <SongName to={`/song/${song?._id}`}>{song?.name}</SongName>
          <AuthorName to={`/author/${song?.author}`}>{song?.author}</AuthorName>
        </Wrapper>
      </SongInfo>
      <Player>Player</Player>
      <PlayerConfig>Player Config</PlayerConfig>
    </Container>
  );
};

export default Footer;
