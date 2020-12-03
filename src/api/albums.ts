import { Song } from "./songs";

export type Album = {
  _id: string;
  name: string;
  description: string;
  artist: string;
  cover: string;
  liked: boolean;
  songs: Song[];
};
