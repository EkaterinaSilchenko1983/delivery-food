import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopPage from './pages/ShopPage/ShopPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// import { AppBar } from './components/AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          {/* <Route path="restaurants" element={<ShopPage />} /> */}
          <Route path="restaurants/:restaurantName" element={<ShopPage />} />
          <Route path="shopping-cart" element={<ShoppingCartPage />} />
          {/* <Route path="*" element={<ShopPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
