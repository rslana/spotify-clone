import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  SongName,
  ArtistName,
  Album,
  Wrapper,
} from "./styles";
import * as SvgIcons from "../Icons";
import { usePlayer } from "../../contexts/player";
import { Actions } from "../Navbar/styles";
import { Playlist } from "../../api/playlists";
import { Song } from "../../api/songs";

export default function SongInfo() {
  const { userConfig, setShowAlbum, song, likeSong, myPlaylists } = usePlayer();
  const [animateClass, setAnimateClass] = useState("");
  const [mainPlaylist, setMainPlaylist] = useState<Playlist>();

  useEffect(() => {
    setMainPlaylist(myPlaylists.find((playlist) => playlist.main));
  }, [myPlaylists]);

  const handleLike = () => {
    likeSong(song);
    if (isSongLiked(song)) {
      setAnimateClass("");
    } else {
      setAnimateClass("_animation-shake");
    }
  };

  const isSongLiked = (song: Song) => {
    return mainPlaylist?.songs.some((s) => s._id === song._id);
  };

  return (
    <Container>
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
      <Actions>
        <Button
          liked={isSongLiked(song)}
          className={animateClass}
          onClick={handleLike}
        >
          {isSongLiked(song) ? <SvgIcons.FillHeart /> : <SvgIcons.EmptyHeart />}
        </Button>
      </Actions>
    </Container>
  );
}
