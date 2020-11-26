import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #000;
  color: #fff;
  padding-top: 24px;
`;

export const Logo = styled.a`
  display: flex;
  padding-left: 24px;
  svg {
    width: 131px;
    height: 40px;
    path {
      fill: #fff;
    }
  }
`;


