import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Celebrity Management</Logo>
    </NavbarContainer>
  );
};

export default Navbar;
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
