import React from "react";
import { Container, Button, HeaderLinks, HeaderLink } from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const isActive = (href: string) => history.location.pathname === href;
  return (
    <Container>
      <Button>
        <SvgIcons.ArrowLeft />
      </Button>
      <Button>
        <SvgIcons.ArrowRight />
      </Button>
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
