import styled from "styled-components";

export const Container = styled.div`
  grid-area: PF;
  display: grid;
  width: 100%;
  background: var(--gray-color);
  color: #fff;
  padding: 0 16px;
  grid-template-columns: 30% 40% 30%;
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
