import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
// import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage/index';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { fetchProducts } from './store/products';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const addToCart = (newProduct) => {
  //   let product = cart.find((el) => el.id === newProduct.id);

  //   if (product) {
  //     product.quantity++;
  //     setCart([...cart]);
  //   } else {
  //     product = { ...newProduct, quantity: 1 };
  //     setCart([...cart, product]);
  //   }
  // };
  // const changeProductQty = (id, value) => {
  //   const product = cart.find((el) => el.id === id);

  //   if (product) {
  //     product.quantity = value;
  //     setCart([...cart]);
  //   }
  // };

  // const deleteFromCart = (id) => {
  //   setCart(cart.filter((product) => product.id !== id));
  // };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const PrivateRoute = ({ children }) => {
    return Cookies.get('token') ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      {Cookies.get('token') && <p>Авторизован</p>}
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
