import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 18px;
  // background-color: #728c2b;

  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 80px;
  & img {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;
