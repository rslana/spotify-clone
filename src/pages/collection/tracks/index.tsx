import React from "react";
// import { usePlayer } from "../../../contexts/player";
import { Container } from "../../../styles/pages";
import {
  Cover,
  Header,
  HeaderInfo,
  HeaderInfoMetadata,
  HeaderInfoSection,
  HeaderUserPhoto,
  HeaderUsername,
} from "./styles";
// import * as SvgIcons from "../../../components/Icons";

export default function Tracks() {
  const songsAmount = 1234;
  return (
    <Container fluid>
      <Header>
        <Cover cover={"/images/covers/playlists/liked-songs.png"} />
        <HeaderInfo>
          <h2>Playlist</h2>
          <h1>Liked Songs</h1>
          <HeaderInfoSection>
            <HeaderUserPhoto
              src={"/images/profile/rslana.jpeg"}
              alt="Profile"
            />
            <HeaderUsername>rslana</HeaderUsername>
            <HeaderInfoMetadata>
              &nbsp;&bull; {songsAmount.toLocaleString("en")} songs
            </HeaderInfoMetadata>
          </HeaderInfoSection>
        </HeaderInfo>
      </Header>
      <div></div>
    </Container>
  );
}
