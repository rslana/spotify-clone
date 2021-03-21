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
    }
  }
`;

export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
  padding: 24px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  grid-column: auto / span 2;
  background: linear-gradient(
    149.46deg,
    rgb(69, 10, 245),
    rgb(142, 142, 229) 99.16%
  );
  overflow: hidden;
  position: relative;

  &:hover {
    button {
      bottom: 16px;
      opacity: 1;
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

type PlayButtonProps = {
  active?: boolean;
  size?: string;
};

export const PlayButton = styled.button.attrs((props: PlayButtonProps) => ({
  active: props.active,
  size: props.size === "big" ? "48px" : "40px",
  transition: props.size === "big" ? "400ms" : "300ms",
  padding: props.size === "big" ? "16px" : "8px",
  iconSize: props.size === "big" ? "24px" : "16px",
}))<PlayButtonProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  transition: ${(props) => props.transition};
  background-color: var(--green-color);
  border: none;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${(props) => props.padding};
  bottom: ${(props) => (props.active ? props.padding : `-${props.size}`)};
  opacity: ${(props) => (props.active ? "1" : "0")};
  outline: none;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
  svg {
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
  }

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

export const CardTitle = styled.h1`
  font-size: 24pt;
  font-weight: 700;
  line-height: 28pt;
  letter-spacing: -0.04em;

  margin: 16px 0 8px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardDescription = styled.div`
  white-space: normal;
  font-size: 11pt;
  font-weight: 400;
  line-height: 13pt;
  margin-top: 4px;
  letter-spacing: normal;
  text-transform: none;
`;

export const CardFooter = styled.div`
  width: 100%;
  justify-self: flex-end;
`;

export const LastSongsAdded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;

  span {
    font-size: 12pt;
    line-height: 18pt;
  }

  span:not(:first-child) {
    span:first-child {
      padding: 0 4px;
      font-size: 11pt;
      color: var(--gray-text-color);
    }
  }

  div {
    height: 72px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SongName = styled.span`
  color: #fff;
`;

export const ArtistName = styled.span`
  color: var(--gray-text-color);
`;
