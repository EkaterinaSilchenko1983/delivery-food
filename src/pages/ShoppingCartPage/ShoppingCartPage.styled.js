import styled from 'styled-components';
import background from '../../images/background.jpg';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;
export const BackLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 60px;
  // margin-bottom: 30px;
  cursor: pointer;
  :hover {
    color: #4b2a99;
  }
`;

export const SectionHero = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 70px;
  padding-bottom: 70px;
  // text-align: center;
`;
