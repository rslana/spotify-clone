import styled from "styled-components";

export const Container = styled.div`
  grid-area: VM; 
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #000;
  color: #fff;
  padding-top: 24px;
`;

export const Logo = styled.a`
  display: flex;
  padding-left: 24px;
  svg {
    width: 131px;
    height: 40px;
    path {
      fill: #fff;
    }
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  margin-top: 24px;
`;

type MenuLinkProps = {
  active?: boolean
}

export const MenuLink = styled.div.attrs((props: MenuLinkProps) => ({
  active: props.active,
}))<MenuLinkProps>`
  a {
    background: ${props => props.active ? "var(--gray-color)" : "var(--black-color)"};
    font-weight: 600;
    color: ${props => props.active ? "#fff" : "var(--gray-text-color)"};
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    font-size: 14px;
  }
  a {
    svg {
      margin-right: 16px;
    }
  }
`;
