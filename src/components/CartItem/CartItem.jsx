import { useDispatch } from 'react-redux';

import { incrementAmount, decrementAmount } from '../../redux/Cart/cart-slice';

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

export const CartItem = ({
  id,
  prices,
  title,
  img,
  onClick,
  total,
  amount,
}) => {
  const dispatch = useDispatch();

  const handleDecrement = product => {
    dispatch(decrementAmount(product));
  };

  const handleIncrement = product => {
    dispatch(incrementAmount(product));
  };

  return (
    <WrapperCartItem>
      <ItemImg src={img} alt={title} />
      <Wrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrices>{prices} $</ItemPrices>
        <WrapperBetween>
          <WrapperButton>
            <button
              disabled={amount <= 0}
              onClick={() => handleDecrement({ id, prices, amount, total })}
            >
              -
            </button>
            <p>{amount}</p>
            <button
              onClick={() => handleIncrement({ id, prices, amount, total })}
            >
              {' '}
              +{' '}
            </button>
          </WrapperButton>
          <WrapperTotal>
            <p>Total: {total} $</p>
          </WrapperTotal>
          <button onClick={onClick}>Delete</button>
        </WrapperBetween>
      </Wrapper>
    </WrapperCartItem>
  );
};
