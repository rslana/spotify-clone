import React from "react";
import {
  Container,
  SongInfo,
  SongName,
  ArtistName,
  Album,
  Wrapper,
} from "./styles";
import { usePlayer } from "../../contexts/player";
import Player from "../Player";
import PlayerConfig from "../PlayerConfig";

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
          <ArtistName to={`/artist/${song?.artist}`}>{song?.artist}</ArtistName>
        </Wrapper>
      </SongInfo>
      <Player />
      <PlayerConfig />
    </Container>
  );
};

export default Footer;
