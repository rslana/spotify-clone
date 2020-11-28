import React, { createContext, useContext, useState, useEffect } from "react";
import { findMyPlaylists, Playlist } from "../api/playlists";
import { findSongById, Song } from "../api/songs";

export interface PlayerContextType {
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
  song: Song;
  setSong(song: Song): void;
  myPlaylists: Playlist[];
  setMyPlaylists(playlists: Playlist[]): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [showAlbum, setShowAlbum] = useState<boolean>(true);
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);
  const [song, setSong] = useState<Song>();

  const contextValue = {
    showAlbum,
    setShowAlbum,
    myPlaylists,
    setMyPlaylists,
    song,
    setSong,
  } as PlayerContextType;

  useEffect(() => {
    setMyPlaylists(findMyPlaylists());
    setSong(findSongById("2"));
  }, []);

  return (
    <PlayerContext.Provider value={{ ...contextValue }}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within the PlayerContext");
  }
  return context;
}
