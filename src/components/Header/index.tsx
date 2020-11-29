import React from "react";
import { Container, Button, HeaderLinks, HeaderLink, Actions } from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const isActive = (href: string) => history.location.pathname === href;
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
      <HeaderLinks>
        <HeaderLink active={isActive("/collection/playlists")}>
          <Link to="/collection/playlists">Playlists</Link>
        </HeaderLink>
        <HeaderLink active={isActive("/collection/podcasts")}>
          <Link to="/collection/podcasts">Podcasts</Link>
        </HeaderLink>
        <HeaderLink active={isActive("/collection/artists")}>
          <Link to="/collection/artists">Artists</Link>
        </HeaderLink>
        <HeaderLink active={isActive("/collection/albums")}>
          <Link to="/collection/albums">Albums</Link>
        </HeaderLink>
      </HeaderLinks>
    </Container>
  );
};

export default Header;
