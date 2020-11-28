import React from "react";
import {
  Container,
  IconWrapper,
  Logo,
  MenuLink,
  MenuLinks,
  PlaylistLink,
  Divider,
  Title,
  PlaylistList,
} from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";
import { usePlayer } from "../../contexts/player";

export default function VerticalMenu() {
  const history = useHistory();
  const isActive = (href: string) => history.location.pathname === href;
  const { myPlaylists } = usePlayer();

  return (
    <Container>
      <Logo>
        <SvgIcons.Spotify />
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
        <MenuLink active={isActive("/playlist")}>
          <Link to="/playlist">
            <SvgIcons.Library active={isActive("/playlist")} /> Your Library
          </Link>
        </MenuLink>
      </MenuLinks>
      <MenuLinks>
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
        <PlaylistList>
          {myPlaylists.map((playlist) => {
            return (
              <MenuLink active={isActive("/")} size="small" key={playlist._id}>
                <Link to="/">{playlist.name}</Link>
              </MenuLink>
            );
          })}
        </PlaylistList>
      </MenuLinks>
    </Container>
  );
}
