import { Song } from "../songs";
export class ListItem {
  song: Song;
  next: ListItem | undefined | null;
  previous: ListItem | undefined | null;

  constructor(song: Song) {
    this.song = song;
  }
}

export const getLinkedList = (songsArray: Song[]) => {
  const newArray = songsArray.map((s) => new ListItem(s));
  return newArray.map((song, index) => {
    // FIRST
    if (index === 0 && index !== newArray.length - 1) {
      song.next = newArray[index + 1];
      song.previous = null;
      return song;
    }
    // MIDDLE
    if (index > 0 && index < newArray.length - 1) {
      song.next = newArray[index + 1];
      song.previous = newArray[index - 1];
      return song;
    }
    // LAST
    if (index === newArray.length - 1 && index !== 0) {
      song.next = null;
      song.previous = newArray[index - 1];
      return song;
    }
    return song;
  }) as ListItem[];
};

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
