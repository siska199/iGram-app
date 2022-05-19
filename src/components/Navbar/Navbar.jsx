import React, { useContext} from "react";
import { ThemeContext } from "../../hook/themeContext";
import { NavbarContainer, Logo, HeaderNavbar } from "./style";
import ToggleButtonCom from "../ToggleButton/ToggleButton";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderNavbar bg={theme.primary}>
      <NavbarContainer className="container">
        <Logo>iGram</Logo>
        <ToggleButtonCom />
      </NavbarContainer>
    </HeaderNavbar>
  );
};
export default Navbar;
