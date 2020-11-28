import { uniqueNamesGenerator , adjectives, colors, animals} from "unique-names-generator";

export const getRandomName = () =>  uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors],
  separator: ' ',
  length: 2
});