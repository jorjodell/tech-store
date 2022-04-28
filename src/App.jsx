import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from './store/context';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);

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

  const storeState = {
    products,
    setProducts,
    colors,
    setColors,
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
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
