import React, { useEffect } from "react";
import { Container, Button, NavbarLinks, NavbarLink, Actions } from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";
import { usePlayer } from "../../contexts/player";
import { findMainPlaylist } from "../../api/playlists";

const Navbar = () => {
  const history = useHistory();
  const isActive = (href: string) => history.location.pathname === href;

  const { playlist, setPlaylist } = usePlayer();

  useEffect(() => {
    const likedSongs = findMainPlaylist();
    setPlaylist(likedSongs);
  }, [setPlaylist]);
  return (
    <Container>
      <Actions>
        <Button onClick={() => history.goBack()}>
          <SvgIcons.ArrowLeft />
        </Button>
        <Button onClick={() => history.goForward()}>
          <SvgIcons.ArrowRight />
        </Button>
      </Actions>
      <NavbarLinks>
        <NavbarLink active={isActive("/collection/playlists")}>
          <Link to="/collection/playlists">Playlists</Link>
        </NavbarLink>
        <NavbarLink active={isActive("/collection/podcasts")}>
          <Link to="/collection/podcasts">Podcasts</Link>
        </NavbarLink>
        <NavbarLink active={isActive("/collection/artists")}>
          <Link to="/collection/artists">Artists</Link>
        </NavbarLink>
        <NavbarLink active={isActive("/collection/albums")}>
          <Link to="/collection/albums">Albums</Link>
        </NavbarLink>
      </NavbarLinks>
    </Container>
  );
};

export default Navbar;
