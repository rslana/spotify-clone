import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray-text-color);
  width: 100%;
`;

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const PlaybackBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-text-color);
  width: 100%;
  height: 16px;
`;

export const PlaybackTime = styled.div`
  font-size: 10pt;
  letter-spacing: -0.04rem;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: var(--gray-lighter-color);
  margin: auto 8px;
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
  margin-right: 16px;
  outline: none;

  &:hover {
    color: #fff;
    transform: ${(props) => (props.main ? "scale(1.06)" : "")};
    border-color: ${(props) => (props.main ? "#fff" : "")};
  }
`;
