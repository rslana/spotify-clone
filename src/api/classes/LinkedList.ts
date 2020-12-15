import { Song } from "../songs";

export class ListItem {
  song: Song;
  next: ListItem | undefined | null;
  previous: ListItem | undefined | null;

  constructor(song: Song) {
    this.song = song;
  }
}

export const getLinkedListSize = (song: Song) => {
  let count = 0;
  let node = song;
  while (node) {
    count++;
    if (node.next) {
      node = node.next;
    } else {
      break;
    }
  }
  return count;
};
