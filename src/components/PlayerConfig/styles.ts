import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: var(--gray-text-color);
  width: 100%;
`;

export const VolumeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-text-color);
  width: 100%;
  max-width: 93px;
  height: 16px;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: var(--gray-lighter-color);
  margin: auto 8px;

  & > ::-webkit-slider-thumb {
    display: none;
  }
  &:hover {
    & > ::-webkit-slider-thumb {
      display: initial;
    }
    div {
      background-color: var(--green-color) !important;
    }
    span {
      display: initial;
    }
  }
`;

type ProgressBarTrackProps = {
  progress: number;
};

export const ProgressBarTrack = styled.div.attrs(
  (props: ProgressBarTrackProps) => ({
    style: {
      width: `${props.progress}%`,
    },
  })
)<ProgressBarTrackProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4px;
  border-radius: 2px;
  background-color: var(--gray-text-color);
`;

export const ProgressBarRange = styled.input`
  box-sizing: border-box;
  background-color: initial;
  outline: none !important;
  border: none;
  display: block;
  position: relative;
  margin: 0;
  appearance: none;
`;

export const ProgressBarBullet = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff !important;
  position: absolute;
  top: calc(50% - 6px);
  display: block;
  left: 0;
  display: none;
`;

type ButtonProps = {
  active?: boolean;
  main?: boolean;
};

export const Button = styled.button.attrs((props: ButtonProps) => ({
  active: props.active,
  main: props.main,
}))<ButtonProps>`
  background: transparent;
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: center;
  color: var(--gray-text-color);
  height: 32px;
  width: 32px;
  padding: 0;
  border: ${(props) =>
    props.main ? "solid 1px var(--gray-text-color)" : "none"};
  border-radius: 50%;
  outline: none;

  &:hover {
    color: #fff;
    transform: ${(props) => (props.main ? "scale(1.06)" : "")};
    border-color: ${(props) => (props.main ? "#fff" : "")};
  }
`;
