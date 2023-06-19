import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperRestaurants = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media screen and (min-width: 768px) {
    margin-top: 120px;
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const RestaurantsListWrapper = styled.ul`
  display: flex;
  margin-left: 20px;
  padding: 10px 10px 48px 10px;
  gap: 28px;
  height: 56px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
    z-index: -2;
  }

  @media screen and (min-width: 768px) {
    gap: 55px;
  }
`;

export const RestaurantLink = styled(Link)`
  position: relative;
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #808080;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    position: absolute;
    z-index: 2;
    content: '';
    left: 0;
    top: 46px;
    width: 100%;
    height: 3px;
    background-color: transparent;
  }

  :hover,
  :focus {
    color: #8baa36;
  }
  &.active {
    color: #8baa36;
    &::after {
      background-color: #8baa36;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 1;
  }
`;
