import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: PF;
  display: grid;
  width: 100%;
  background: var(--gray-color);
  color: #fff;
  padding: 0 16px;
  grid-template-columns: 30% 40% 30%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  a:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

type AlbumProps = {
  cover: string;
  show?: boolean;
};

export const Album = styled.div.attrs((props: AlbumProps) => ({
  show: props.show,
}))<AlbumProps>`
  width: 56px;
  height: 56px;
  transition: 300ms;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 16px;
  margin-left: ${(props) => (props.show ? "initial" : "-72px")};
`;

export const SongName = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.4em;
  font-size: 14px;
  font-weight: 400;
`;

export const ArtistName = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.4em;
  font-size: 12px;
  color: var(--gray-text-color);
`;

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  audio {
    display: none;
  }
`;

export const PlayerConfig = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
