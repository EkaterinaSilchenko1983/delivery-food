import { useSelector } from 'react-redux';

import { Container } from '../../pages/ShopPage/ShopPage.styled';
import { Navigation } from '../Navigation/Navigation';
import { getProductCount } from '../../redux/Cart/cart-selector';
import { Header, HeaderLogo, HeaderWrapper } from './AppBar.styled';
import dish_icon from '../../images/dish_icon.svg';

export const AppBar = () => {
  const quantity = useSelector(getProductCount);
  return (
    <Header>
      <Container>
        <HeaderWrapper>
          <HeaderLogo to="/">
            <img src={dish_icon} alt="logo" />
          </HeaderLogo>
          <Navigation />
          <div>
            <p>Quantity: {quantity}</p>
          </div>
        </HeaderWrapper>
      </Container>
    </Header>
  );
};
