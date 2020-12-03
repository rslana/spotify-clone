import React, { createContext, useContext, useState, useEffect } from "react";
import { Album } from "../api/albums";
import { findMyPlaylists, findPlaylistById, Playlist } from "../api/playlists";
import { findSongById, Song, initSongState } from "../api/songs";
import {
  getLocalUserConfig,
  setLocalUserConfig,
  UserConfig,
  initUserConfigState,
} from "../helpers/storage";

type PlaySongProps = {
  playlist?: Playlist;
  album?: Album;
  song?: Song;
};

export interface PlayerContextType {
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
  userConfig: UserConfig;
  setUserConfig(userConfig: UserConfig): void;
  song: Song;
  setSong(song: Song): void;
  myPlaylists: Playlist[];
  setMyPlaylists(playlists: Playlist[]): void;
  audioElement: HTMLAudioElement | null;
  setAudioElement(audioElement: HTMLAudioElement): void;
  playSong(playSongProps?: PlaySongProps): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [userConfig, setUserConfig] = useState<UserConfig>(initUserConfigState);
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);
  const [song, setSong] = useState<Song>(initSongState);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>(
    new Audio()
  );
  const setShowAlbum = (showAlbum: boolean) => {
    setUserConfig(setLocalUserConfig({ ...userConfig, showAlbum }));
  };

  useEffect(() => {
    setUserConfig(getLocalUserConfig());
    setMyPlaylists(findMyPlaylists());
    const songFound = findSongById("id-02");
    if (songFound) {
      setSong((oldState) => ({
        ...oldState,
        ...songFound,
        playlist: findPlaylistById("id-01"),
      }));
    }
  }, []);

  useEffect(() => {
    const playPause = () => {
      if (song.playing) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    };
    if (audioElement && audioElement.src) {
      playPause();
    }
  }, [audioElement, song]);

  const playSong = (props?: PlaySongProps) => {
    if (props?.playlist?._id) {
      const findSongByPlaylist = () => {
        if (props.playlist && props.playlist.songs.length > 0) {
          return props.song
            ? props.playlist.songs.find((s) => s._id === song._id)
            : props.playlist?.songs[0];
        }
        return null;
      };

      const songFound = findSongByPlaylist();

      const isSamePlaylist = () => {
        return song?.playlist?._id === props.playlist?._id;
      };

      const isSameSong = () => {
        return songFound?._id === song?._id;
      };

      if (songFound) {
        if (isSameSong() && isSamePlaylist()) {
          setSong({
            ...song,
            playlist: props.playlist,
            playing: !song.playing,
          });
        } else {
          const audio = audioElement;
          audio.src = songFound.url;
          audio.onloadeddata = () => {
            setAudioElement(audio);
            setSong({
              ...songFound,
              playlist: props.playlist,
              playing: true,
            });
          };
        }
      }
    } else if (props?.song) {
      const audio = audioElement;
      audio.src = props.song.url;
      audio.onloadeddata = () => {
        setAudioElement(audio);
        setSong({ ...props.song!, playing: true });
      };
    } else if (song) {
      setSong({ ...song, playing: !song.playing });
    }
  };

  const contextValue = {
    setShowAlbum,
    myPlaylists,
    setMyPlaylists,
    song,
    setSong,
    userConfig,
    setUserConfig,
    audioElement,
    setAudioElement,
    playSong,
  } as PlayerContextType;

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
