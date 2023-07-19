import { Outlet } from 'react-router-dom';

import { Header, Nav, StyledNavLink } from "./SharedLayout.styled"

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/">
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
// No props to validate
