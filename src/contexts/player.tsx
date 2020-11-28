import React, { createContext, useContext, useState, useEffect } from "react";
import { findMyPlaylists, Playlist } from "../api/playlists";

export interface PlayerContextType {
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
  myPlaylists: Playlist[];
  setMyPlaylists(playlists: Playlist[]): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [showAlbum, setShowAlbum] = useState<boolean>(true);
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);

  const contextValue = {
    showAlbum,
    setShowAlbum,
    myPlaylists,
    setMyPlaylists,
  } as PlayerContextType;

  useEffect(() => {
    setMyPlaylists(findMyPlaylists());
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
