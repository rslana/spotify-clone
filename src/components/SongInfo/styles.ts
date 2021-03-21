import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  a:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;

//   width: 100%;
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 12px;
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

type ButtonProps = {
  active?: boolean;
  main?: boolean;
  liked?: boolean;
};

export const Button = styled.button.attrs((props: ButtonProps) => ({
  active: props.active,
  main: props.main,
  liked: props.liked,
}))<ButtonProps>`
  background: transparent;
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: center;
  color: var(--gray-text-color);
  height: 32px;
  width: 32px;
  padding: 0;
  border: ${(props) =>
    props.main ? "solid 1px var(--gray-text-color)" : "none"};
  border-radius: 50%;
  outline: none;
  color: ${(props) => (props.liked ? "#1db954" : "inherit")}; ;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: var(--gray-text-color);
`;
