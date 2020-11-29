import {
  getRandomName,
  getRandomPlaylistName,
  getRandomDescription,
  // getRandomLength,
} from "../helpers/uniqueNames";

export type Playlist = {
  _id: string;
  name: string;
  description: string;
  author: string;
  cover: string;
  liked: boolean;
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
  "yoga",
  "plant",
  "fruit",
  "people",
  "skeleton",
  "rabbit",
];

const playlists: Playlist[] = keywords.map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomPlaylistName(),
  description: getRandomDescription(),
  author: getRandomName(),
  cover: `https://source.unsplash.com/232x232/?${keywords[index]}`,
  liked: true,
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
