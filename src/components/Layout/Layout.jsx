import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/userMenu';
import {
  StyledHeaderContainer,
  StyledLoggedInWrapper,
  StyledWrapper,
} from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <StyledHeaderContainer>
        {isLoggedIn ? (
          <StyledLoggedInWrapper>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu></UserMenu>
            <Navigate to="contacts" />
          </StyledLoggedInWrapper>
        ) : (
          <StyledWrapper>
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </StyledWrapper>
        )}
      </StyledHeaderContainer>
      <Outlet />
    </div>
  );
};

export default Layout;
