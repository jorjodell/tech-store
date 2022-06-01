import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import css from './category-page.module.css';
import { fetchProductsByFilter } from '../../store/products';

function CategoryPage() {
  const [selectedColor, setSelectedColor] = useState();
  const products = useSelector((state) => state.products.data);
  const colors = useSelector((state) => state.products.colors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedColor) {
      dispatch(fetchProductsByFilter(selectedColor))
    }
  }, [selectedColor, dispatch]);

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
