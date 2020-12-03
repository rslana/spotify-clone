import { getRandomName } from "../helpers/uniqueNames";
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
    _id: "id-01",
    name: "Wake Up (Cover)",
    artist: getRandomName(),
    cover: "/images/covers/albums/the-police/outlandos-d-amour.jpg",
    url: "/songs/jj_shiplett_wake_up_arcade_fire_cover_live_at_siriusxm.mp3",
    liked: true,
  },
  {
    _id: "id-02",
    name: "Where is my mind? (Cover)",
    artist: getRandomName(),
    cover: "https://source.unsplash.com/random/232x232",
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
