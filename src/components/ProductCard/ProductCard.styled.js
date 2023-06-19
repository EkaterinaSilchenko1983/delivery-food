import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  
  border: 1px solid #eeeeee;
  transition: box-shadow 250ms  cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #ffff;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: 768px) {
   
  }
  @media (min-width: 1200px) {
   
  }

  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 343px;
  height: 322px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1200px) {
    width: 368px;
    height: 292px;
  }
`;
export const StyledLink = styled(Link)``;

export const CardDescription = styled.p`
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  padding: 63px 24px;

  font-size: 18px;
  line-height: 1.55;
  letter-spacing: 0.03em;
  color: #808080;

  transform: translateY(100%);
  opacity: 0;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 500ms ease-in-out;

  ${StyledLink}:hover &,
  ${StyledLink}:focus & {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardMeta = styled.div`
  padding: 28px 24px;
`;

export const CardTitle = styled.h2`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #808080;
  margin-bottom: 20px;
`;

export const CardPrices = styled.p`
  color: #808080;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.03em;
  text-align: center;
`;

export const WrapperButton = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const AddButton = styled.button`
  width: 150px;
  height: 50px;
  font-family: inherit;
  font-style: normal;
  //   font-weight: 600;
  font-size: 18px;
  color: #ffff;
  line-height: 1.2;
  background-color: #8baa36;

  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    background-color: #728c2b;
  }
`;
