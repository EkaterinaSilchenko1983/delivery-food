import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Restaurants</StyledLink>
      <StyledLink to="/shopping-cart">Cart</StyledLink>
    </nav>
  );
};
