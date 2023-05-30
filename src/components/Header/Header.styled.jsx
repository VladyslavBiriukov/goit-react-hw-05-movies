import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
  height: 30px;
  background: rgb(183,76,255);
  background: linear-gradient(90deg, rgba(183,76,255,1) 0%, rgba(94,88,255,1) 50%, rgba(247,122,254,1) 100%);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
 text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: #2722ad;
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #00bbff;
    text-shadow: 3px 3px 20px #00bbff, -2px 1px 30px #00bbff;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 6px;
    background: #00bbff;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -20px;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;