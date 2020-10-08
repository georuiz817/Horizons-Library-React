import React from "react";
import { NavLink, NavContainer } from "../navbar/NavBar.styles";
const NavBar = () => {
  return (
    <NavContainer>
      <NavLink to="/"><span role='img' aria-label="donut">🏠</span></NavLink>
    </NavContainer>
  );
};

export default NavBar;
