import { getRandomName, getRandomPlaylistName } from "../helpers/uniqueNames"

export type Playlist = {
  _id: string
  name: string
  author: string
  cover: string
  liked: boolean
}

const playlists:Playlist[] = [...Array(20)].map((p, index) => ({
  _id: `id-${index}`,
  name: getRandomPlaylistName(),
  author: getRandomName(),
  cover: "https://source.unsplash.com/random/232x232",
  liked: true
}))


export const findPlaylistById = (_id:string) => {
  return playlists.find(playlist => playlist?._id === _id)
}

export const findMyPlaylists = () => {
  return playlists
}
