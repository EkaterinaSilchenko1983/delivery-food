import {
  ProductWrapper,
  Card,
  CardDescription,
  StyledLink,
  CardMeta,
  CardPrices,
  CardTitle,
  CardImg,
  AddButton,
  WrapperButton,
} from './ProductCard.styled';

export const ProductCard = ({ id, title, img, desc, prices, onClick }) => {
  return (
    <>
      <ProductWrapper>
        <StyledLink>
          <Card>
            <CardImg src={img} alt={title} width="450" height="404" />
            <CardDescription>{desc}</CardDescription>
          </Card>

          <CardMeta>
            <CardTitle>{title}</CardTitle>
            <CardPrices>{prices} $</CardPrices>
          </CardMeta>
        </StyledLink>
        <WrapperButton>
          <AddButton onClick={onClick}>Add to cart</AddButton>
        </WrapperButton>
      </ProductWrapper>
    </>
  );
};
