import { getRandomName, getRandomSongName } from "../helpers/uniqueNames";

export type Song =
  | {
      _id: string;
      name: string;
      author: string;
      cover: string;
      url: string;
      liked: boolean;
      playing?: boolean;
    }
  | undefined;

export const initSongState: Song = {
  _id: "",
  name: "",
  author: "",
  cover: "",
  url: "",
  liked: false,
  playing: false,
};

const songs: Song[] = [
  {
    _id: "1",
    name: "Roxanne",
    author: getRandomName(),
    cover: "/images/covers/albums/the-police/outlandos-d-amour.jpg",
    url: "/songs/where_is_my_mind_pixies_cover_by_alicia_widar.mp3",
    liked: true,
  },
  {
    _id: "2",
    name: getRandomSongName(),
    author: getRandomName(),
    cover: "https://source.unsplash.com/random/232x232",
    url: "/songs/where_is_my_mind_pixies_cover_by_alicia_widar.mp3",
    liked: true,
  },
];

export const findSongById = (_id: string) => {
  return songs.find((song) => song?._id === _id);
};
