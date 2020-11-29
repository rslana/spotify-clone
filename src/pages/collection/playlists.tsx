import React from "react";
import { usePlayer } from "../../contexts/player";
import {
  Container,
  Grid,
  Title,
  GridCol,
  Cover,
  CoverTitle,
  CoverDescription,
} from "../../styles/pages";

export default function Playlists() {
  const { myPlaylists } = usePlayer();
  return (
    <Container>
      <Title>Playlists</Title>
      <Grid>
        {myPlaylists.map((playlist) => {
          return (
            <GridCol key={playlist._id}>
              <Cover cover={playlist.cover} />
              <CoverTitle>{playlist.name}</CoverTitle>
              <CoverDescription>{playlist.description}</CoverDescription>
            </GridCol>
          );
        })}
      </Grid>
    </Container>
  );
}
