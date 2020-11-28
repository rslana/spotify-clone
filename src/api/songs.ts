import { getRandomName } from "../helper/uniqueNames"

export type Song = {
  _id: string
  name: string
  author: string
  cover: string
  liked: boolean
} | undefined

const songs:Song[] = [
  {
    _id:"1",
    name: "Roxanne",
    author: getRandomName(),
    cover: "/images/covers/albums/the-police/outlandos-d-amour.jpg",
    liked: true
  },
  {
    _id:"2",
    name: "Another Brick In The Wall, Pt. 2",
    author: getRandomName(),
    cover: "https://source.unsplash.com/random/232x232",
    liked: true
  }
]

export const findSongById = (_id:string) => {
  return songs.find(song => song?._id === _id)
}
