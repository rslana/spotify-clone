import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
} from "unique-names-generator";

export const getRandomLength = (to: number, from: number = 1) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

export const getRandomPlaylistName = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors, adjectives],
    separator: " ",
    length: getRandomLength(4),
    style: "capital",
  });

export const getRandomName = () =>
  uniqueNamesGenerator({
    dictionaries: [names, names],
    separator: " ",
    length: getRandomLength(2),
    style: "capital",
  });

export const getRandomSongName = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    separator: " ",
    length: getRandomLength(3),
    style: "capital",
  });

export const getRandomAlbumName = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: " ",
    length: getRandomLength(2),
    style: "capital",
  });

export const getRandomDescription = () =>
  uniqueNamesGenerator({
    dictionaries: [
      colors,
      adjectives,
      animals,
      adjectives,
      animals,
      colors,
      adjectives,
      adjectives,
      animals,
      colors,
    ],
    separator: " ",
    length: getRandomLength(10, 2),
    style: "capital",
  });

export const searchKeywords = [
  "water",
  "landscape",
  "volcano",
  "nature",
  "river",
  "galaxy,universe",
  "waterfall",
  "thunderstorm",
  "minimalist",
  "plant",
  "moutain,water",
  "coffee",
  "ocean",
  "tree,nature",
  "green",
  "fish",
  "moutain,ice",
  "leaf",
];

export const songsKeywords = [
  "universe,galaxy",
  "landscape",
  "waterfall",
  "thunderstorm",
  "tree,nature",
  "moutain,ice",
  "leaf",
];
