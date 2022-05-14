import React from 'react'
import {NavbarContainer,Logo, Ul, Li} from "./style"

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>iGram</Logo>
      <Ul>
        <Li>Profile</Li>
        <Li>Logout</Li>
      </Ul>
    </NavbarContainer>
  )
}
export default Navbar
