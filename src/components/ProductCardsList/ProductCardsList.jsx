import { useState, useEffect } from 'react';

import { getCards } from '../../shared/API/restaurants';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loader } from '../Loader/Loader';
import { ProductList } from './ProductCardsList.styled';

import { products } from '../../shared/API/restaurants';

export const ProductCardsList = () => {
  return (
    <>
      <ProductList>
        {products?.map(({ id, title, img, desc, prices }) => (
          <li key={id}>
            <ProductCard
              id={id}
              title={title}
              img={img}
              desc={desc}
              prices={prices}
            />
          </li>
        ))}
      </ProductList>
    </>
  );
};
