import clsx from 'clsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/context';
import Card from '../../components/Card/Card';
import css from './category-page.module.css';


function CategoryPage() {
  const [selectedColor, setSelectedColor] = useState();
  const { products, setProducts, colors } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:3001/products`, {
        params: { color: selectedColor },
      });
      setProducts(data);
    };

    if (selectedColor) {
      fetchProducts();
    }
  }, [selectedColor]);

  console.log(products)

  return (
    <div className={clsx(css.category, 'container')}>
      <section className={css.filter}>
        <h3>Filter</h3>
        <section>
          <h4>Color</h4>
          <div className={css.colorContent}>
            {colors.map((color) => (
              <label
                key={color.id}
                className={clsx(css.color, {
                  [css.colorChecked]: selectedColor === color.id,
                })}
                style={{ backgroundColor: color.value }}
              >
                <input
                  type="radio"
                  checked={selectedColor === color.id}
                  onChange={() => setSelectedColor(color.id)}
                />
              </label>
            ))}
          </div>
        </section>
      </section>
      <div className={css.list}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Card
              title={product.title}
              price={product.price - (product.price / 100) * product.sale}
              priceOld={product.price}
              isInStock={product.available}
              image={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
