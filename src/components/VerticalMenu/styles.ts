import styled from "styled-components";

export const Container = styled.div`
  grid-area: VM;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 90px);
  background: #000;
  color: #fff;
  padding-top: 24px;
  overflow: hidden;
  position: relative;
`;

export const Logo = styled.a`
  display: flex;
  padding-left: 24px;
  align-items: center;
  svg {
    width: 131px;
    height: 40px;
    path {
      fill: #fff;
    }
  }
  span {
    margin-left: 4px;
    font-size: 10.5pt;
    font-weight: 900;
    letter-spacing: -0.02rem;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  margin-top: 24px;
`;

export type SIZES = "small" | "normal" | "big";
type MenuLinkProps = {
  active?: boolean;
  size?: SIZES;
};

export const MenuLink = styled.div.attrs((props: MenuLinkProps) => ({
  active: props.active,
  size: props.size,
}))<MenuLinkProps>`
  a {
    background: ${(props) =>
      props.active ? "var(--gray-color)" : "var(--black-color)"};
    font-weight: 600;
    color: ${(props) => (props.active ? "#fff" : "var(--gray-text-color)")};
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms;

    ${(props) =>
      props.size === "small" &&
      `
      background: transparent;
      font-weight: 400;
      height: initial;
      display: block;
      padding: 8px;
    `}

    &:hover {
      color: #fff;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

type PlaylistLinkProps = {
  active?: boolean;
  main?: boolean;
};
export const PlaylistLink = styled.div.attrs((props: PlaylistLinkProps) => ({
  active: props.active,
  main: props.main,
}))<PlaylistLinkProps>`
  a {
    opacity: ${(props) => (props.active ? 1 : 0.7)};
    font-weight: 600;
    color: ${(props) => (props.active ? "#fff" : "var(--gray-text-color)")};
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    font-size: 14px;
    transition: opacity 400ms;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 9pt;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 12px 16px;
  color: var(--gray-text-color);
`;

type IconWrapperProps = {
  background?: string;
  color?: string;
  size?: number;
};
export const IconWrapper = styled.div.attrs((props: IconWrapperProps) => ({
  background: props.background,
  color: props.color,
  size: props.size,
}))<IconWrapperProps>`
  background: ${(props) => (props.background ? props.background : "#fff")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  margin-right: 16px;
  color: ${(props) => (props.color ? props.color : "#fff")};

  svg {
    width: ${(props) => (props.size ? `${props.size}px` : "32px")};
    height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  }
`;

export const Divider = styled.div`
  width: calc(100% - 32px);
  height: 1px;
  background-color: var(--gray-color);
  margin: 8px auto;
`;

type PlaylistListProps = {
  shrink?: boolean;
};

export const PlaylistList = styled.div.attrs((props: PlaylistListProps) => ({
  shrink: props.shrink,
}))<PlaylistListProps>`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  margin-top: 8px;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  bottom: ${(props) => (props.shrink ? "236px" : "4px")};
  width: calc(100% - 12px);
  left: 8px;
  top: 360px;
`;

type AlbumProps = {
  cover: string;
  show?: boolean;
};

export const Album = styled.div.attrs((props: AlbumProps) => ({
  show: props.show,
}))<AlbumProps>`
  width: 232px;
  height: 232px;
  transition: 300ms;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  bottom: 0;
  bottom: ${(props) => (props.show ? "0" : "-232px")};
`;
