import React, { createContext, useContext, useState, useEffect } from "react";
import { findMyPlaylists, Playlist } from "../api/playlists";
import { findSongById, Song } from "../api/songs";
import {
  getLocalUserConfig,
  setLocalUserConfig,
  UserConfig,
  initUserConfig,
} from "../helpers/storage";

export interface PlayerContextType {
  loadingApp: boolean;
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
  userConfig: UserConfig;
  setUserConfig(userConfig: UserConfig): void;
  song: Song;
  setSong(song: Song): void;
  myPlaylists: Playlist[];
  setMyPlaylists(playlists: Playlist[]): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [loadingApp, setLoadingApp] = useState(true);
  const [userConfig, setUserConfig] = useState<UserConfig>(initUserConfig);
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);
  const [song, setSong] = useState<Song>();

  const setShowAlbum = (showAlbum: boolean) => {
    setUserConfig(setLocalUserConfig({ ...userConfig, showAlbum }));
  };

  const contextValue = {
    setShowAlbum,
    myPlaylists,
    setMyPlaylists,
    song,
    setSong,
    userConfig,
    setUserConfig,
  } as PlayerContextType;

  useEffect(() => {
    setUserConfig(getLocalUserConfig());
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
