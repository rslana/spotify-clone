import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: fixed;
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
    animation-delay: -0.4s;
  }

  div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -0.8s;
  }

  @keyframes loader-grid {
    0%,
    100% {
      opacity: 1;
      max-width: 9px;
      max-height: 9px;
    }

    50% {
      opacity: 0.5;
      max-width: 11px;
      max-height: 11px;
    }
  }
`;

export const LoaderBullet = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--gray-color) !important;
  background-image: linear-gradient(
    90deg,
    var(--gray-color) 0%,
    var(--gray-text-color) 100%
  ) !important;
  animation: loader-grid 1.2s linear infinite;
`;
