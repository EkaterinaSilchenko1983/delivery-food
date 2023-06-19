import { useEffect, useState } from 'react';
import { SectionHero } from './Cart.styled';
import { CartItem } from '../CartItem/CartItem';
import { ProductsListCart } from './Cart.styled';

export const Cart = () => {
  return (
    <>
      <ProductsListCart>
        <h2>Your cart</h2>
        <CartItem />
      </ProductsListCart>
    </>
  );
};
