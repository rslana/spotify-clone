import {
  searchKeywords,
  getRandomName,
  getRandomPlaylistName,
  getRandomDescription,
  // getRandomLength,
} from "../helpers/uniqueNames";
import { findSongs, Song } from "./songs";

export type Playlist = {
  _id: string;
  name: string;
  description: string;
  artist: string;
  cover: string;
  liked: boolean;
  songs: Song[];
  songsLinkedList?: Song | null;
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
  artist: getRandomName(),
  cover: `https://source.unsplash.com/232x232/?${searchKeywords[index]}`,
  liked: true,
  songs: songsLinkedList,
  songsLinkedList: songsLinkedList[0],
}));

playlists.push({
  _id: `id-999`,
  name: "Empty Playlist",
  description: "This is an empty playlist dude",
  artist: getRandomName(),
  cover: ``,
  liked: false,
  songs: [],
  songsLinkedList: null,
});

export const findPlaylistById = (_id: string) => {
  return playlists.find((playlist) => playlist?._id === _id);
};

// export const getPlaylistImagesFromUnsplash = async () => {
//   const response = await Promise.all(
//     searchKeywords.map(async (playlist) => {
//       const res = await fetch(`https://source.unsplash.com/random/232x232`);
//       return res.url;
//     })
//   );
//   return response;
// };

export const findMyPlaylists = () => {
  return playlists;
};
