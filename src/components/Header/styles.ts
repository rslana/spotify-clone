import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: HE;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  background: transparent;
  color: #fff;
  padding: 0 32px;
`;

export const Button = styled.button`
  background-color: rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: center;
  color: #fff;
  height: 32px;
  width: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
  outline: none;
  svg {
    width: 22px;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 8px;
`;

type HeaderLinkProps = {
  active?: boolean
}

export const HeaderLink = styled.div.attrs((props: HeaderLinkProps) => ({
  active: props.active
}))<HeaderLinkProps>`
  a {
    background: ${props => props.active ? "var(--gray-color)" : "transparent"};
    font-weight: 600;
    color: ${props => props.active ? "#fff" : "var(--gray-text-color)"};
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 10.5pt;
    transition: 400ms;
    margin-right: 8px;
    
    &:hover {
      color: #fff;
    }

    svg {
      margin-right: 16px;
    }
  }
`;
