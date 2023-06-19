import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #808080;
  font-weight: 500;
  :last-child {
    margin-left: 20px;
  }

  &.active {
    background-color: #728c2b;
    color: #ffff;
  }
`;
