import {
  WrapperCartItem,
  ItemImg,
  ItemTitle,
  ItemPrices,
  Wrapper,
  WrapperButton,
  WrapperTotal,
  WrapperBetween,
} from './CartItem.styled';

export const CartItem = () => {
  return (
    <WrapperCartItem>
      <ItemImg src="img" alt="title" width="450" height="404" />
      <Wrapper>
        <ItemTitle>title</ItemTitle>
        <ItemPrices>prices $</ItemPrices>
        <WrapperBetween>
          <WrapperButton>
            <button> -</button>
            <p> 1 </p>
            <button> + </button>
          </WrapperButton>
          <WrapperTotal>
            <p>Total: 5$</p>
          </WrapperTotal>
        </WrapperBetween>
      </Wrapper>
    </WrapperCartItem>
  );
};
