import styled from "styled-components";

export const Container = styled.div`
  grid-area: MV;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  width: 100%;
  background: transparent;
  color: #fff;
  padding: 0 32px;
`;
