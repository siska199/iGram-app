import styled from "styled-components";

export const HeaderNavbar = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${(props) => props.bg};
`;
export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.h1`
  font-family: "Lobster", cursive;
  letter-spacing: 0.2rem;

  &:hover {
    color: #f8abb3;
    cursor: pointer;
  }
`;
