import styled from "styled-components";

type ContainerProps = {
  fluid?: boolean;
  offset?: boolean;
};

export const Container = styled.div.attrs((props: ContainerProps) => ({
  fluid: props.fluid,
  offset: props.offset,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.fluid ? "0" : "0 32px")};
  color: #fff;
  padding-bottom: 32px;
  position: relative;
  padding-top: ${(props) => (props.offset ? "60px" : "0")};
  ::-webkit-scrollbar-track {
    box-shadow: transparent;
  }
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

export const Card = styled.div`
  background: var(--gray-darker-color);
  transition: background-color 0.3s ease;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: var(--gray-color);

    button {
      bottom: 8px;
      opacity: 1;
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
    }
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
  position: relative;
`;

type CoverPlayButtonProps = {
  active?: boolean;
};

export const CoverPlayButton = styled.button.attrs(
  (props: CoverPlayButtonProps) => ({
    active: props.active,
  })
)<CoverPlayButtonProps>`
  width: 40px;
  height: 40px;
  transition: 300ms;
  background-color: var(--green-color);
  border: none;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 8px;
  bottom: ${(props) => (props.active ? "8px" : "-20px")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  outline: none;

  &:hover {
    transition: all 0ms;
    transform: scale(1.06);
  }
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
