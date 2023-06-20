import { useEffect, useState } from 'react';
import { SectionHero } from './Cart.styled';
import { CartItem } from '../CartItem/CartItem';
import { ProductsListCart } from './Cart.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/Cart/cart-slice';

export const Cart = () => {
  const orderedProducts = useSelector(state => {
    return state.cart;
  });
  console.log(orderedProducts);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <ProductsListCart>
        <h2>Your cart</h2>
        {orderedProducts.map(({ id, prices, title, img, amount, total }) => (
          <li key={id}>
            <CartItem
              id={id}
              prices={prices}
              title={title}
              img={img}
              onClick={() => handleDelete(id)}
              amount={amount}
              total={total}
            />
          </li>
        ))}
      </ProductsListCart>
    </>
  );
};
