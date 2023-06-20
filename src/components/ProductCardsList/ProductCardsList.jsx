import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../shared/API/restaurants';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loader } from '../Loader/Loader';
import { ProductList } from './ProductCardsList.styled';
import { addProduct } from '../../redux/Cart/cart-slice';

import { products } from '../../shared/API/restaurants';

export const ProductCardsList = () => {
  const addedProducts = useSelector(state => {
    return state.cart;
  });
  // const [products, setProducts] = useState([]);

  // useEffect(() => {

  //   const fetchProducts = async () => {

  //     try {
  //       const { data } = await getCards();
  //       setProducts(data);
  //     } catch (error) { }
  //   };
  //   fetchProducts();
  // }, [])

  const dispatch = useDispatch();

  const handleAddBtn = product => {
    if (addedProducts.find(({ id }) => id === product.id)) {
      return alert('this product already in bucket!');
    }

    dispatch(addProduct(product));
  };

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
              onClick={() => handleAddBtn({ id, prices, title })}
            />
          </li>
        ))}
      </ProductList>
    </>
  );
};
