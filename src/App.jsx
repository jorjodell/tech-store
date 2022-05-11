import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from './store/context';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage/index';
import CartPage from './pages/CartPage';

function App() {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? []
  );

  const fetchAllData = async () => {
    const [resProducts, resColors] = await Promise.all([
      axios.get(`http://localhost:3001/products`),
      axios.get('http://localhost:3001/colors'),
    ]);
    setProducts(resProducts.data);
    setColors(resColors.data);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const addToCart = (newProduct) => {
    let product = cart.find((el) => el.id === newProduct.id);

    if(product) {
      product.quantity++
      setCart([...cart]);
    } else {
      product = { ...newProduct, quantity: 1 }
      setCart([...cart, product]);
    }
  };
  const changeProductQty = (id, value) => {
    const product = cart.find((el) => el.id === id);

    if(product) {
      product.quantity = value
      setCart([...cart]);
    }
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const storeState = {
    products,
    setProducts,
    colors,
    setColors,
    addToCart,
    cart,
    changeProductQty,
  };

  return (
    <div className="App">
      <StoreContext.Provider value={storeState}>
        <Header />
        <Carousel />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
