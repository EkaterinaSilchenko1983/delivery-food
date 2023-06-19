import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ProductCardsList } from '../ProductCardsList/ProductCardsList';
import { getRestaurants } from '../../shared/API/restaurants';
import { RestaurantsList } from '../RestaurantsList/RestaurantsList';

import { SectionWrapper } from './Restaurants.styled';

export const Restaurants = () => {
  const { restaurantName } = useParams();
  const [currentRestaurantName, setCurrentRestaurantName] = useState('');

  const restaurants = getRestaurants();

  useEffect(() => {
    if (restaurantName) {
      setCurrentRestaurantName(restaurantName);
    } else if (restaurants.length > 0) {
      setCurrentRestaurantName(restaurants[0].name);
    }
  }, [restaurantName, restaurants]);

  // console.log(currentRestaurantName);

  const restaurant = restaurants?.find(
    ({ name }) =>
      name.toLowerCase().replace(/\s+/g, '-') === currentRestaurantName
  );

  // console.log(restaurant.id);

  return (
    <>
      <SectionWrapper>
        {/* <h2>Restaurants</h2> */}
        <RestaurantsList
          restaurantName={currentRestaurantName}
          restaurants={restaurants}
        />
        <ProductCardsList />
      </SectionWrapper>
    </>
  );
};

// export const Restaurants = () => {
//   // const [restaurants, setRestaurants] = useState([]);

//   // useEffect(() => {
//   //   async function fetchRestaurants() {
//   //     try {
//   //       const restaurants = await getRestaurants();
//   //       setRestaurants(restaurants);
//   //     } catch {
//   //       toast('Cannot fetch restaurants');
//   //     }
//   //   }
//   //   fetchRestaurants();
//   // }, []);

// useEffect(() => {
//   const fetchCards = async () => {
//     try {
//       setIsLoading(true);
//       const { data } = await getCards(page);
//       setUsers(prevUsers => [...prevUsers, ...data]);
//     } catch ({ response }) {
//       const errorMessage = response.data.message || 'Cannot fetch cards';
//       setError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   fetchCards();
// }, [page]);
