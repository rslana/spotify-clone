
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
    author: "The Police",
    cover: "/images/covers/albums/the-police/outlandos-d-amour.jpg",
    liked: true
  }
]

export const findSongById = (_id:string) => {
  return songs.find(song => song?._id === _id)
}
