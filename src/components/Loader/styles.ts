import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 64px;
  /* height: 24px; */
  z-index: 1000;
  top: calc(50% - 16px);
  left: calc(50% - 32px);

  div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: 0.4s;
  }

  @keyframes loader-grid {
    0%,
    100% {
      opacity: 1;
      max-width: 10px;
      max-height: 10px;
    }

    50% {
      opacity: 0.4;
      max-width: 6px;
      max-height: 6px;
    }
  }
`;

export const LoaderBullet = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  animation: loader-grid 1s linear infinite;
  animation-delay: 1s;
`;
