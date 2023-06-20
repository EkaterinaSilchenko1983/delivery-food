import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import {
  WrapperRestaurants,
  RestaurantsListWrapper,
  RestaurantLink,
} from './RestaurantsList.styled';

export const RestaurantsList = ({ restaurants, restaurantName }) => {
  const tabRef = useRef();
  const { events } = useDraggable(tabRef);

  // console.log(restaurantName, restaurants);
  return (
    <>
      <WrapperRestaurants>
        <RestaurantsListWrapper
          restaurantName={restaurantName}
          {...events}
          ref={tabRef}
        >
          {restaurants.map(({ id, name }) => {
            const formattedName = name.toLowerCase().replace(/\s+/g, '-');
            return (
              <li key={id}>
                <RestaurantLink
                  className={restaurantName === formattedName ? 'active' : ''}
                  label={name}
                  value={name}
                  to={`/restaurants/${formattedName}`}
                >
                  {name}
                </RestaurantLink>
              </li>
            );
          })}
        </RestaurantsListWrapper>
      </WrapperRestaurants>
    </>
  );
};
