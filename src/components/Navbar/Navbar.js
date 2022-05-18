import React from "react";
import {
  NavbarContainer,
  Logo,
  ToggleButton,
  ContainerIcon,
  HeaderNavbar,
} from "./style";

export const Navbar = ({ setLight, light }) => {
  return (
    <HeaderNavbar light={light}>
      <NavbarContainer className="container">
        <Logo>iGram</Logo>
        <ToggleButton>
          <input type="checkbox" onChange={(e) => setLight(e.target.checked)} />
          <ContainerIcon light={light}>
            <box-icon color="white" type="solid" name="sun"></box-icon>
            <box-icon color="black" type="solid" name="moon"></box-icon>
            <div className="ball"></div>
          </ContainerIcon>
        </ToggleButton>
      </NavbarContainer>
    </HeaderNavbar>
  );
};
export default Navbar;
