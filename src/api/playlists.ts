import { getRandomName } from "../helper/uniqueNames"

export type Playlist = {
  _id: string
  name: string
  author: string
  cover: string
  liked: boolean
}

const playlists:Playlist[] = [...Array(20)].map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomName(),
  author: "The Police",
  cover: "/images/covers/albums/the-police/outlandos-d-amour.jpg",
  liked: true
}))


export const findPlaylistById = (_id:string) => {
  return playlists.find(playlist => playlist?._id === _id)
}

export const findMyPlaylists = () => {
  return playlists
}
