import { getRandomName, songsKeywords } from "../helpers/uniqueNames";
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

// Static songs
const songs: Song[] = [
  {
    _id: "id-0",
    name: "Sleep On The Floor",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[0]}`,
    url: "/songs/the_lumineers_sleep_on_the_floor_official_video.mp3",
    liked: true,
  },
  {
    _id: "id-1",
    name: "Wake Up (cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[1]}`,
    url: "/songs/jj_shiplett_wake_up_arcade_fire_cover_live_at_siriusxm.mp3",
    liked: true,
  },
  {
    _id: "id-2",
    name: "Where is my mind? (cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[2]}`,
    url: "/songs/where_is_my_mind_pixies_cover_by_alicia_widar.mp3",
    liked: true,
  },
  {
    _id: "id-3",
    name: "Fly me to the moon (cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[3]}`,
    url: "/songs/frank_sinatra_fly_me_to_the_moon_cover_nursena_yener.mp3",
    liked: true,
  },
  {
    _id: "id-4",
    name: "Snuff (cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[4]}`,
    url: "/songs/snuff-slipknot-cover.mp3",
    liked: true,
  },
  {
    _id: "id-5",
    name: "Right Before My Eyes",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[5]}`,
    url: "/songs/right-before-my-eyes.mp3",
    liked: true,
  },
  {
    _id: "id-6",
    name: "Flume (cover)",
    artist: getRandomName(),
    cover: `https://source.unsplash.com/232x232/?${songsKeywords[6]}`,
    url: "/songs/flume-cover.mp3",
    liked: true,
  },
];

export const findSongs = (): Song[] => {
  return songs;
};

export const findSongById = (_id: string) => {
  return songs.find((song) => song?._id === _id);
};
