import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useStore } from '../../store/context';

function ProductPage() {
  const { products, addToCart } = useStore();

  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === +id);

  return (
    <div>
      {currentProduct && (
        <button onClick={() => addToCart(currentProduct)}>
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
