import {
  searchKeywords,
  getRandomName,
  getRandomPlaylistName,
  getRandomDescription,
  // getRandomLength,
} from "../helpers/uniqueNames";
import { findSongs, Song } from "./songs";
import { getLinkedList, ListItem } from "./classes/LinkedList";

export type Playlist = {
  _id: string;
  name: string;
  description: string;
  author: string;
  cover: string;
  liked: boolean;
  songs: Song[];
  songsLinkedList?: ListItem | null;
  songsAmount?: number;
  main?: boolean;
};

const songsArray = findSongs();

const playlists: Playlist[] = searchKeywords.map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomPlaylistName(),
  description: getRandomDescription(),
  author: getRandomName(),
  cover: `https://source.unsplash.com/232x232/?${searchKeywords[index]}`,
  liked: true,
  songs: songsArray,
  // Creates a Double linked list (static for all playlists)
  songsLinkedList: getLinkedList(songsArray)[0],
}));

// Empty playlist
playlists.push({
  _id: `id-999`,
  name: "Empty Playlist",
  description: "This is an empty playlist dude",
  author: getRandomName(),
  cover: ``,
  liked: false,
  songs: [],
  songsLinkedList: null,
});

export const findPlaylistById = (_id: string) => {
  return playlists.find((playlist) => playlist?._id === _id);
};

export const findMyPlaylists = () => {
  return playlists;
};

export const findMainPlaylist = () => {
  const likedSongs: Playlist = {
    _id: `id-1000`,
    name: "Liked Songs",
    description: "",
    author: getRandomName(),
    cover: `/images/covers/playlists/liked-songs.png`,
    liked: true,
    songs: songsArray.filter((s, i) => i % 2 === 0),
    // Creates a Double linked list (main playlist)
    songsLinkedList: getLinkedList(songsArray.filter((s, i) => i % 2 === 0))[0],
    songsAmount: songsArray.filter((s, i) => i % 2 === 0).length,
    main: true,
  };
  return likedSongs;
};

playlists.unshift(findMainPlaylist());

export const likeSong = (song: Song, playlist: Playlist) => {
  if (playlist.songs.find((s) => s._id === song._id)) {
    playlist.songs = playlist.songs.filter((s) => s._id !== song._id);
  } else {
    playlist.songs = [song, ...playlist.songs];
  }
  const linkedList = getLinkedList(playlist.songs);

  playlist.songsLinkedList = linkedList[0];
  playlist.songsAmount = playlist.songs.length;

  return {
    playlist,
    song,
  };
};
