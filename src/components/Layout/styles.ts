import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 232px auto;
  grid-template-rows: auto 60px 90px;

  // VM - Vertical Menu
  // HE - Header
  // PB - Player body
  // PF - Player footer
  grid-template-areas: 
  'VM HE'
  'VM PB'
  'PF PF';

  height: 100vh;
`;