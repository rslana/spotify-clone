import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 232px auto;
  grid-template-rows: 60px auto 90px;
  overflow-x: hidden;

  // VM - Vertical Menu
  // HE - Header
  // PB - Player body
  // PF - Player footer
  grid-template-areas:
    "VM HE"
    "VM PB"
    "PF PF";

  height: 100vh;
`;
