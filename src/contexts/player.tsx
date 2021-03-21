import React, { createContext, useContext, useState, useEffect } from "react";
import { Album } from "../api/albums";
import { Playlist } from "../api/playlists";
import * as playlistService from "../api/playlists";
import { Song, initSongState } from "../api/songs";

import {
  getLocalUserConfig,
  setLocalUserConfig,
  UserConfig,
  initUserConfigState,
} from "../helpers/storage";
import { getLinkedList, ListItem } from "../api/classes/LinkedList";

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
  listItem: ListItem;
  setListItem<ListItem>(listItem: ListItem | null | undefined): void;
  likeSong<Song>(song: Song): void;
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
  const [listItem, setListItem] = useState<ListItem | null | undefined>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>(
    new Audio()
  );
  const setShowAlbum = (showAlbum: boolean) => {
    setUserConfig(setLocalUserConfig({ ...userConfig, showAlbum }));
  };

  useEffect(() => {
    setUserConfig(getLocalUserConfig());
    setMyPlaylists(playlistService.findMyPlaylists());
    const playlistFound = playlistService.findPlaylistById("id-0");
    if (playlistFound) {
      playlistFound.songsLinkedList = getLinkedList(playlistFound.songs)[0];
      const songFound = playlistFound.songsLinkedList;
      setSong({ ...songFound.song, playlist: playlistFound });
      setListItem(songFound);
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
      props.playlist.songsLinkedList = getLinkedList(props.playlist.songs)[0];
      const songFound = props.playlist.songsLinkedList;
      setListItem(songFound);

      const isSamePlaylist = () => {
        return song?.playlist?._id === props.playlist?._id;
      };

      const isSameSong = () => {
        return songFound?.song._id === song?._id;
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
            ...songFound.song,
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
    if (listItem?.next) {
      setListItem(listItem.next);
      newSong({
        ...listItem.next.song,
        playlist: listItem.next?.song.playlist
          ? listItem?.next.song.playlist
          : song.playlist,
      });
    } else {
      setListItem(listItem);
      newSong(song, false);
    }
  };

  const playPreviousSong = () => {
    if (listItem?.previous && audioElement.currentTime <= 2) {
      setListItem(listItem.previous);
      newSong({
        ...listItem.previous.song,
        playlist: listItem.previous?.song.playlist
          ? listItem.previous.song.playlist
          : song.playlist,
      });
    } else {
      setListItem(listItem);
      newSong(song, true);
    }
  };

  const likeSong = (song: Song) => {
    const mainPlaylist = myPlaylists.find((p) => p.main);
    const res = playlistService.likeSong(song, mainPlaylist!);

    const newPlaylist = res.playlist;
    newPlaylist.songsLinkedList = getLinkedList(newPlaylist.songs)[0];

    setMyPlaylists(
      myPlaylists.map((p) => {
        return p._id === newPlaylist._id ? newPlaylist : p;
      })
    );
    setSong(res.song);
  };

  const contextValue = {
    setShowAlbum,
    myPlaylists,
    setMyPlaylists,
    song,
    setSong,
    likeSong,
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
