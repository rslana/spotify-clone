import React from "react";
import {
  Container,
  IconWrapper,
  Logo,
  MenuLink,
  MenuLinks,
  PlaylistLink,
  PlaylistLinks,
  Divider,
  Title,
  PlaylistList,
  Album,
} from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";
import { usePlayer } from "../../contexts/player";

export default function VerticalMenu() {
  const history = useHistory();
  const { myPlaylists, userConfig, setShowAlbum, song, playSong } = usePlayer();
  const isActive = (href: string) => {
    if (href === "/") {
      return history.location.pathname === href;
    }
    return history.location.pathname.indexOf(href) === 0;
  };
  return (
    <Container>
      <Logo>
        <SvgIcons.Spotify />
        <span>Clone</span>
      </Logo>
      <MenuLinks>
        <MenuLink active={isActive("/")}>
          <Link to="/">
            <SvgIcons.Home active={isActive("/")} /> Home
          </Link>
        </MenuLink>
        <MenuLink active={isActive("/search")}>
          <Link to="/search">
            <SvgIcons.Search active={isActive("/search")} /> Search
          </Link>
        </MenuLink>
        <MenuLink active={isActive("/collection")}>
          <Link to="/collection/playlists">
            <SvgIcons.Library active={isActive("/collection")} /> Your Library
          </Link>
        </MenuLink>
      </MenuLinks>
      <PlaylistLinks>
        <Title>Playlists</Title>
        <PlaylistLink main={true}>
          <Link to="/create-playlist">
            <IconWrapper background={"#fff"}>
              <SvgIcons.Plus />
            </IconWrapper>{" "}
            Create Playlist
          </Link>
        </PlaylistLink>
        <PlaylistLink main={true}>
          <Link to="/collection/tracks">
            <IconWrapper
              background={"var(--liked-background-color)"}
              color={"#fff"}
              size={16}
            >
              <SvgIcons.Heart active={true} />
            </IconWrapper>{" "}
            Liked Songs
          </Link>
        </PlaylistLink>
        <Divider />
        <PlaylistList shrink={!userConfig.showAlbum}>
          {myPlaylists.map((playlist) => {
            return (
              !playlist.main && (
                <MenuLink
                  active={
                    isActive(`/playlist/${playlist._id}`) ||
                    song.playlist?._id === playlist._id
                  }
                  size="small"
                  key={playlist._id}
                  onDoubleClick={() => playSong({ playlist })}
                >
                  <Link to={`/playlist/${playlist._id}`}>{playlist.name}</Link>
                </MenuLink>
              )
            );
          })}
        </PlaylistList>
        {!!song && (
          <Album
            cover={song.cover}
            show={!userConfig.showAlbum}
            onClick={() => setShowAlbum(!userConfig.showAlbum)}
          />
        )}
      </PlaylistLinks>
    </Container>
  );
}
