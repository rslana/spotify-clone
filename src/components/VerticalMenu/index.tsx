import React from "react";
import { Container, Logo, MenuLink, MenuLinks } from "./styles";
import * as SvgIcons from "../Icons";
import { Link, useHistory } from "react-router-dom";

export default function VerticalMenu() {
  const history = useHistory();
  const isActive = (href: string) => history.location.pathname === href;

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
            <SvgIcons.Home active={isActive("/search")} /> Search
          </Link>
        </MenuLink>
        <MenuLink active={isActive("/playlist")}>
          <Link to="/playlist">
            <SvgIcons.Home active={isActive("/playlist")} /> Your Library
          </Link>
        </MenuLink>
      </MenuLinks>
    </Container>
  );
}
