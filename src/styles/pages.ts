import styled from "styled-components";

export const Container = styled.div`
  grid-area: PB;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  padding: 0 32px;
  color: #fff;
  padding-bottom: 90px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 17pt;
  line-height: 20pt;
  font-weight: 700;
  letter-spacing: -0.02rem;
  margin: 16px 0;
`;

export const GridCol = styled.div`
  background: var(--gray-darker-color);
  transition: background-color 0.3s ease;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: var(--gray-color);
  }
`;

type CoverProps = {
  cover: string;
};

export const Cover = styled.div.attrs((props: CoverProps) => ({
  cover: props.cover,
}))<CoverProps>`
  width: 100%;
  padding-bottom: 100%;
  transition: 300ms;
  background-color: #333;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 16px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
`;

export const CoverTitle = styled.h1`
  font-size: 11pt;
  line-height: 12pt;
  font-weight: 500;
  margin: 16px 0 8px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 13pt;
`;

export const CoverDescription = styled.p`
  font-size: 10pt;
  line-height: 13pt;
  font-weight: 400;
  height: 25pt;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--gray-text-color);
`;