import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 232px auto;
  grid-template-rows: auto 90px;
  overflow-x: hidden;

  // VM - Vertical Menu
  // MV - Main view
  // PF - Player footer
  grid-template-areas:
    "VM MV"
    "PF PF";

  height: 100vh;
`;

type PageWrapperProps = {
  fluid?: boolean;
  offset?: boolean;
};

export const PageWrapper = styled.div.attrs((props: PageWrapperProps) => ({
  fluid: props.fluid,
  offset: props.offset,
}))<PageWrapperProps>`
  grid-area: MV;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  color: #fff;
  position: relative;
  ::-webkit-scrollbar-track {
    box-shadow: transparent;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
`;
