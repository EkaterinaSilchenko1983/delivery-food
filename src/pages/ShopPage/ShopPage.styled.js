import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 48;
  text-align: center;
  color: #4b2a99;
  gap: 100px;
`;
