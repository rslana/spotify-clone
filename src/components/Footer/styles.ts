import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: PF;
  display: grid;
  width: 100%;
  background: var(--gray-color);
  color: #fff;
  padding: 0 24px;
  grid-template-columns: 28% 44% 28%;  
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  a:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const SongName = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.4em;
  font-size: 14px;
  font-weight: 400;
`;

export const AuthorName = styled(Link)`
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
`;

export const PlayerConfig = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
