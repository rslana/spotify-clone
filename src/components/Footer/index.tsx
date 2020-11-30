import React from "react";
import {
  Container,
  SongInfo,
  PlayerConfig,
  SongName,
  AuthorName,
  Album,
  Wrapper,
} from "./styles";
import { usePlayer } from "../../contexts/player";
import Player from "../Player";

const Footer = () => {
  const { userConfig, setShowAlbum, song } = usePlayer();

  return (
    <Container>
      <SongInfo>
        {!!song && (
          <Album
            cover={song.cover}
            show={userConfig.showAlbum}
            onClick={() => setShowAlbum(!userConfig.showAlbum)}
          />
        )}
        <Wrapper>
          <SongName to={`/song/${song?._id}`}>{song?.name}</SongName>
          <AuthorName to={`/author/${song?.author}`}>{song?.author}</AuthorName>
        </Wrapper>
      </SongInfo>
      <Player />
      <PlayerConfig>Player Config</PlayerConfig>
    </Container>
  );
};

export default Footer;
