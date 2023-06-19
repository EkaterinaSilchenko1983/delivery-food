import { useEffect, useState } from 'react';
import { Container } from './ShopPage.styled';
import { Restaurants } from '../../components/Restaurants/Restaurants';

const ShopPage = () => {
  return (
    <Container>
      <Restaurants />
    </Container>
  );
};
export default ShopPage;
