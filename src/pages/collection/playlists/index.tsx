import React from "react";
import { usePlayer } from "../../../contexts/player";
import {
  Container,
  Grid,
  Title,
  Card,
  CustomCard,
  Cover,
  CoverTitle,
  CardTitle,
  CardDescription,
  CardFooter,
  LastSongsAdded,
  CoverDescription,
  PlayButton,
  SongName,
  ArtistName,
} from "../../../styles/pages";
import * as SvgIcons from "../../../components/Icons";

export default function Playlists() {
  const { myPlaylists, song, playSong } = usePlayer();

  return (
    <Container offset>
      <Title>Playlists</Title>
      <Grid>
        {myPlaylists.map((playlist, i) => {
          return i === 0 ? (
            <CustomCard key={playlist._id}>
              <PlayButton
                active={song.playlist?._id === playlist._id}
                onClick={() => playSong({ playlist })}
                size={"big"}
              >
                {song?.playing && song.playlist?._id === playlist._id ? (
                  <SvgIcons.Pause />
                ) : (
                  <SvgIcons.Play />
                )}
              </PlayButton>
              <LastSongsAdded>
                <div>
                  {playlist.songs.map((song, i) => {
                    return (
                      <span key={song._id}>
                        {i !== 0 && <span>&bull;</span>}
                        <SongName>{song.name}</SongName>{" "}
                        <ArtistName>{song.artist}</ArtistName>
                      </span>
                    );
                  })}
                </div>
              </LastSongsAdded>
              <CardFooter>
                <CardTitle>{playlist.name}</CardTitle>
                <CardDescription>
                  {playlist.songsAmount} liked songs
                </CardDescription>
              </CardFooter>
            </CustomCard>
          ) : (
            <Card key={playlist._id}>
              <Cover cover={playlist.cover}>
                <PlayButton
                  active={song.playlist?._id === playlist._id}
                  onClick={() => playSong({ playlist })}
                >
                  {song?.playing && song.playlist?._id === playlist._id ? (
                    <SvgIcons.Pause />
                  ) : (
                    <SvgIcons.Play />
                  )}
                </PlayButton>
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
