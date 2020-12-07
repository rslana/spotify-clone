import { getRandomName, searchKeywords } from "../helpers/uniqueNames";
import { Album } from "./albums";
import { Playlist } from "./playlists";

export type Song = {
  _id: string;
  name: string;
  artist: string;
  cover: string;
  url: string;
  liked?: boolean;
  playing?: boolean;
  playlist?: Playlist;
  album?: Album;
  next?: Song | null;
  previous?: Song | null;
};

export const initSongState: Song = {
  _id: "",
  name: "",
  artist: "",
  cover: "",
  url: "",
  liked: false,
  playing: false,
};

const songs: Song[] = [
  {
    _id: "id-0",
    name: "Sleep On The Floor",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${searchKeywords[0]}`,
    url: "/songs/the_lumineers_sleep_on_the_floor_official_video.mp3",
    liked: true,
  },
  {
    _id: "id-1",
    name: "Wake Up (Cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${searchKeywords[1]}`,
    url: "/songs/jj_shiplett_wake_up_arcade_fire_cover_live_at_siriusxm.mp3",
    liked: true,
  },
  {
    _id: "id-2",
    name: "Where is my mind? (Cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${searchKeywords[2]}`,
    url: "/songs/where_is_my_mind_pixies_cover_by_alicia_widar.mp3",
    liked: true,
  },
];

export const findSongById = (_id: string) => {
  return songs.find((song) => song?._id === _id);
};

export const findSongs = () => {
  return songs;
};
