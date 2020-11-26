import React from "react";
import { useRouter } from "next/router";
import { Container, Logo, MenuLink, MenuLinks } from "./styles";
import * as SvgIcons from "../Icons";
import Link from "next/link";
export default function VerticalMenu() {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <Container>
      <Logo>
        <SvgIcons.Spotify />
      </Logo>

      <MenuLinks>
        <MenuLink active={isActive("/")}>
          <Link href="/" passHref>
            <a>
              <SvgIcons.Home active={isActive("/")} /> Home
            </a>
          </Link>
        </MenuLink>
        <MenuLink active={isActive("/search")}>
          <Link href="/search">
            <a>
              <SvgIcons.Home active={isActive("/search")} /> Search
            </a>
          </Link>
        </MenuLink>
        <MenuLink active={isActive("/playlist")}>
          <Link href="/playlist">
            <a>
              <SvgIcons.Home active={isActive("/playlist")} /> Your Library
            </a>
          </Link>
        </MenuLink>
      </MenuLinks>
    </Container>
  );
}
