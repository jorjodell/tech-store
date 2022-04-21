import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CatalogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}


export default App;
