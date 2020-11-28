import React from "react";
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
import { usePlayer } from "../../contexts/player";

const Footer = () => {
  const { showAlbum, setShowAlbum, song } = usePlayer();

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
