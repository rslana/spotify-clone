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
  playing?: boolean;
};

export interface PlayerContextType {
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
  userConfig: UserConfig;
  setUserConfig(userConfig: UserConfig): void;
  song: Song;
  setSong<Song>(song: Song): void;
  myPlaylists: Playlist[];
  setMyPlaylists(playlists: Playlist[]): void;
  audioElement: HTMLAudioElement | null;
  setAudioElement(audioElement: HTMLAudioElement): void;
  playSong(playSongProps?: PlaySongProps): void;
  playNextSong(): void;
  playPreviousSong(): void;
  playlist: Playlist;
  setPlaylist(playlist: Playlist): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [userConfig, setUserConfig] = useState<UserConfig>(initUserConfigState);
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);
  const [playlist, setPlaylist] = useState<Playlist>();
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
    const songFound = findSongById("id-0");
    const playlistFound = findPlaylistById("id-0");
    if (songFound) {
      setSong({ ...songFound, playlist: playlistFound });
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

  const newSong = (song: Song, playing?: boolean) => {
    playing = typeof playing === "boolean" ? playing : true;
    const audio = audioElement;
    audio.src = song.url;
    audio.onloadeddata = () => {
      setAudioElement(audio);
      setSong({
        ...song,
        playing,
      });
    };
  };

  const playSong = (props?: PlaySongProps) => {
    if (props?.playlist?._id) {
      const songFound = props.playlist.songsLinkedList;

      const isSamePlaylist = () => {
        return song?.playlist?._id === props.playlist?._id;
      };

      const isSameSong = () => {
        return songFound?._id === song?._id;
      };

      if (songFound) {
        if (isSameSong() && isSamePlaylist() && audioElement.src) {
          console.log("SAME SONG - SAME PLAYLIST");
          setSong({
            ...song,
            playlist: props.playlist,
            playing: props.playing || !song.playing,
          });
        } else {
          console.log("NEW SONG");
          newSong({
            ...songFound,
            playlist: props.playlist,
          });
        }
      }
    } else if (props?.song) {
      newSong(props.song);
    } else if (song) {
      if (!audioElement || !audioElement.src) {
        newSong(song);
      } else {
        setSong({ ...song, playing: !song.playing });
      }
    }
  };

  const playNextSong = () => {
    if (song.next) {
      newSong({
        ...song.next,
        playlist: song.next.playlist ? song.next.playlist : song.playlist,
      });
    } else {
      newSong(song, false);
    }
  };

  const playPreviousSong = () => {
    if (song.previous && audioElement.currentTime <= 2) {
      newSong({
        ...song.previous,
        playlist: song.previous.playlist
          ? song.previous.playlist
          : song.playlist,
      });
    } else {
      newSong(song, true);
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
    playNextSong,
    playPreviousSong,
    playlist,
    setPlaylist,
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
