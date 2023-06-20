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

export const CartItem = ({ prices, title, img, onClick }) => {
  return (
    <WrapperCartItem>
      <ItemImg src={img} alt={title} />
      <Wrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrices>{prices} $</ItemPrices>
        <WrapperBetween>
          <WrapperButton>
            <button> - </button>
            <p> 1 </p>
            <button> + </button>
          </WrapperButton>
          <WrapperTotal>
            <p>Total: 5$</p>
          </WrapperTotal>
          <button onClick={onClick}>Delete</button>
        </WrapperBetween>
      </Wrapper>
    </WrapperCartItem>
  );
};
