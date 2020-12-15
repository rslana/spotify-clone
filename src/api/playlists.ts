import {
  searchKeywords,
  getRandomName,
  getRandomPlaylistName,
  getRandomDescription,
  // getRandomLength,
} from "../helpers/uniqueNames";
import { findSongs, Song } from "./songs";
import { getLinkedListSize } from "./classes/LinkedList";

export type Playlist = {
  _id: string;
  name: string;
  description: string;
  author: string;
  cover: string;
  liked: boolean;
  songs: Song[];
  songsLinkedList?: Song | null;
  songsAmount?: number;
};

const songsArray = findSongs();

// Creates a Double linked list
const songsLinkedList: Song[] = songsArray.map((song, index) => {
  // FIRST
  if (index === 0 && index !== songsArray.length - 1) {
    song.next = songsArray[index + 1];
    song.previous = null;
    return song;
  }
  // MIDDLE
  if (index > 0 && index < songsArray.length - 1) {
    song.next = songsArray[index + 1];
    song.previous = songsArray[index - 1];
    return song;
  }
  // LAST
  if (index === songsArray.length - 1 && index !== 0) {
    song.next = null;
    song.previous = songsArray[index - 1];
    return song;
  }
  return song;
});

const playlists: Playlist[] = searchKeywords.map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomPlaylistName(),
  description: getRandomDescription(),
  author: getRandomName(),
  cover: `https://source.unsplash.com/232x232/?${searchKeywords[index]}`,
  liked: true,
  songs: songsLinkedList,
  songsLinkedList: songsLinkedList[0],
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
    songs: songsLinkedList,
    songsLinkedList: songsLinkedList[0],
    songsAmount: getLinkedListSize(songsLinkedList[0]),
  };
  return likedSongs;
};
