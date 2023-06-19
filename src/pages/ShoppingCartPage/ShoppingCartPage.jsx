import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Cart } from '../../components/Cart/Cart';
import { Container, SectionHero, BackLink } from './ShoppingCartPage.styled';

const ShoppingCartPage = () => {
  // const navigate = useNavigate();
  // const goBack = () => navigate('/');
  return (
    <>
      <SectionHero>
        {/* <Container>
          <BackLink onClick={goBack}>
            <IoIosArrowDropleftCircle size="28" />
            Go back
          </BackLink>
        </Container> */}
      </SectionHero>
      <div>
        <Cart />
      </div>
    </>
  );
};

export default ShoppingCartPage;
