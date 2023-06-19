import { Container } from '../../pages/ShopPage/ShopPage.styled';
import { Navigation } from '../Navigation/Navigation';

import { Header, HeaderLogo, HeaderWrapper } from './AppBar.styled';
import dish_icon from '../../images/dish_icon.svg';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <HeaderWrapper>
          <HeaderLogo to="/">
            <img src={dish_icon} alt="logo" />
          </HeaderLogo>
          <Navigation />
        </HeaderWrapper>
      </Container>
    </Header>
  );
};
