import styled from 'styled-components';

export const WrapperCartItem = styled.div`
  display: flex;
  border: solid gray 1px;
  border-radius: 5px;
  width: 550px;
  padding: 20px;
  gap: 20px;
`;
export const ItemImg = styled.img`
  width: 160px;
  height: 112px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  //   @media (min-width: 768px) {
  //     width: 336px;
  //   }

  //   @media (min-width: 1200px) {
  //     width: 368px;
  //     height: 292px;
  //   }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

export const ItemTitle = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #808080;
`;

export const ItemPrices = styled.p`
  color: #808080;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.03em;
`;

export const WrapperBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapperTotal = styled.div`
  display: flex;
`;
