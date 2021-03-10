import styled from "styled-components";

type HeaderProps = {
  color?: string;
};

export const Header = styled.div.attrs((props) => ({
  props: props.color,
}))<HeaderProps>`
  display: flex;
  width: 100%;
  height: 340px;
  background-color: ${(props) => (props.color ? props.color : "#5038a0")};
  padding: 24px 32px;
  position: relative;
  &::before {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    content: "";
    z-index: 0;
  }
`;

type CoverProps = {
  cover: string;
};

export const Cover = styled.div.attrs((props: CoverProps) => ({
  cover: props.cover,
}))<CoverProps>`
  min-width: 232px !important;
  min-height: 232px !important;
  transition: 300ms;
  background-color: #333;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 24px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  position: relative;
  justify-self: center;
  align-self: flex-end;
  z-index: 1;

  @media (max-width: 1024px) {
    min-width: 192px !important;
    min-height: 192px !important;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1;

  h1 {
    font-size: 72pt;
    letter-spacing: -0.05em;
    line-height: 72pt;
    margin: 0;
    padding: 8px 0;

    @media (max-width: 1100px) {
      font-size: 8vw;
      letter-spacing: -0.05em;
      line-height: 9vw;
    }

    @media (max-width: 880px) {
      font-size: 6.2vw;
      letter-spacing: -0.05em;
      line-height: 7.2vw;
    }
  }

  h2 {
    font-size: 9pt;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 4px 0 0;
    color: #fff;

    @media (max-width: 880px) {
      font-size: clamp(7.5pt, 1.6vw, 8.5pt);
    }
  }
`;

export const HeaderInfoSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const HeaderInfoMetadata = styled.span`
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 11pt;
  letter-spacing: -0.04em;
`;

export const HeaderUserPhoto = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
`;

export const HeaderUsername = styled.span`
  font-size: 11pt;
  font-weight: 700;
`;
