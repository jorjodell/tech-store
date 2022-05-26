import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { addProduct } from '../../store/cart';

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data)
  const currentProduct = products.find((product) => product.id === +id);

  return (
    <div>
      {currentProduct && (
        <button onClick={() => dispatch(addProduct(currentProduct))}>
          <Card
            title={currentProduct.title}
            image={currentProduct.image}
            isInStock={currentProduct.available}
            priceOld={currentProduct.price}
            price={
              currentProduct.price -
              (currentProduct.price / 100) * currentProduct.sale
            }
          />
        </button>
      )}
    </div>
  );
}

export default ProductPage;
