import React from "react";
import { usePlayer } from "../../contexts/player";
import {
  Container,
  Grid,
  Title,
  Card,
  Cover,
  CoverTitle,
  CoverDescription,
  CoverPlayButton,
} from "../../styles/pages";
import * as SvgIcons from "../../components/Icons/";

export default function Playlists() {
  const { myPlaylists, song, playSong } = usePlayer();

  return (
    <Container>
      <Title>Playlists</Title>
      <Grid>
        {myPlaylists.map((playlist) => {
          return (
            <Card key={playlist._id}>
              <Cover cover={playlist.cover}>
                <CoverPlayButton
                  active={song.playlist?._id === playlist._id}
                  onClick={() => playSong({ playlist })}
                >
                  {song?.playing && song.playlist?._id === playlist._id ? (
                    <SvgIcons.Pause />
                  ) : (
                    <SvgIcons.Play />
                  )}
                </CoverPlayButton>
              </Cover>
              <CoverTitle>{playlist.name}</CoverTitle>
              <CoverDescription>{playlist.description}</CoverDescription>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}
