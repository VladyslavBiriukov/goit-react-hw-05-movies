import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Block = styled.div`
display: flex;
gap: 20px;
margin: 20px;
`;

export const Image = styled.img`
height: 400px;

`;

export const InfoBlock = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 500px;
`;

export const Title = styled.h3`
margin-left: 50px;
margin-bottom: 10px;
`;
export const LinkStyled = styled(Link)`
margin-left: 20px;
display: inline-block;
  background: rgb(183,76,255);
  background: linear-gradient(90deg, rgba(183,76,255,1) 0%, rgba(94,88,255,1) 50%, rgba(247,122,254,1) 100%);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition:  0.2s ease-in-out;

  &:hover {
    background: rgb(122,28,186);
    background: linear-gradient(90deg, rgba(122,28,186,1) 0%, rgba(39,34,173,1) 34%, rgba(27,244,255,1) 100%);
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  &:focus {
    background: rgb(122,28,186);
    background: linear-gradient(90deg, rgba(122,28,186,1) 0%, rgba(39,34,173,1) 34%, rgba(27,244,255,1) 100%);
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
`;
export const NavLinkStyled = styled(NavLink)`
color: black;
margin-left: 20px;
text-decoration: none;
display: block;
width: 100px;
background:
    linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
  );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

&:hover {
  text-shadow: 3px 3px 20px #00bbff, -2px 1px 30px #00bbff;
  color: #2722ad;
  background-size: 0 3px, 100% 3px;
}
`;