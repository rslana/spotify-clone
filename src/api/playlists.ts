import {
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
};

const keywords = [
  "water",
  "landscape",
  "mountain",
  "nature",
  "river",
  "galaxy",
  "waterfall",
  "thunderstorm",
  "minimalist",
  "plant",
  "universe",
  "coffee",
  "ocean",
  "green",
  "fish",
  "tree",
  "halloween",
  "leaf",
];

const songs = findSongs();

const playlists: Playlist[] = keywords.map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomPlaylistName(),
  description: getRandomDescription(),
  artist: getRandomName(),
  cover: `https://source.unsplash.com/232x232/?${keywords[index]}`,
  liked: true,
  songs,
}));

export const findPlaylistById = (_id: string) => {
  return playlists.find((playlist) => playlist?._id === _id);
};

// export const getPlaylistImagesFromUnsplash = async () => {
//   const response = await Promise.all(
//     keywords.map(async (playlist) => {
//       const res = await fetch(`https://source.unsplash.com/random/232x232`);
//       return res.url;
//     })
//   );
//   return response;
// };

export const findMyPlaylists = () => {
  return playlists;
};
