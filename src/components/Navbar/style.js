import styled from "styled-components";

export const HeaderNavbar = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  box-shadow: ${(props) =>
    props.light ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : ""};
  background-color: ${(props) => (props.light ? "#f3fbfb" : "#272343")};
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

export const ToggleButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  position: relative;
  border-radius: 20px;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer !important;
    opacity: 0;
    z-index: 9999;
  }

  input:checked + label .ball {
    transform: translateX(35px);
  }
`;

export const ContainerIcon = styled.label`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.light ? "#272343" : "#ffd803"};
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
  border-radius: 20px;
  align-items: center;
  position: relative;

  .ball {
    position: absolute;
    width: 40%;
    height: 80%;
    z-index: 999;
    left: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    background-color: ${(props) => props.light ? "#ffd803" : "#272343"};
  }
`;
