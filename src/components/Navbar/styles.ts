import styled from "styled-components";

export const Container = styled.div`
  grid-area: MV;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  /* background: var(--gray-darker-color); */
  background: rgba(24, 24, 24, 0.5);
  color: #fff;
  padding: 0 32px;
  z-index: 10;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 16px;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
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

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 8px;
`;

type NavbarLinkProps = {
  active?: boolean;
};

export const NavbarLink = styled.div.attrs((props: NavbarLinkProps) => ({
  active: props.active,
}))<NavbarLinkProps>`
  a {
    background: ${(props) =>
      props.active ? "var(--gray-color)" : "transparent"};
    font-weight: 600;
    color: ${(props) => (props.active ? "#fff" : "var(--gray-text-color)")};
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
