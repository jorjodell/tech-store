import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}


export default App;
