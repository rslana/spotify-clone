import { uniqueNamesGenerator , adjectives, colors, animals, names} from "unique-names-generator";

export const getRandomPlaylistName = () =>  uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors, adjectives],
  separator: ' ',
  length: Math.floor((Math.random() * 4 + 1)),
  style: 'capital'
});

export const getRandomName = () =>  uniqueNamesGenerator({
  dictionaries: [names, names],
  separator: ' ',
  length: Math.floor((Math.random() * 2 + 1)),
  style: 'capital'
});

export const getRandomSongName = () =>  uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors],
  separator: ' ',
  length: Math.floor((Math.random() * 3 + 1)),
  style: 'capital'
});

export const getRandomAlbumName = () =>  uniqueNamesGenerator({
  dictionaries: [adjectives, animals],
  separator: ' ',
  length: Math.floor((Math.random() * 2 + 1)),
  style: 'capital'
});