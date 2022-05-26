import clsx from 'clsx';
import Collapse from '../../components/Collapse/Collapse';
import css from './card-page.module.css';

const CardPage = () => {
  const cart = []
  const links = ['Home', 'Category', 'Cart'];
  return (
    <div className={clsx('container', css.page)}>
      <div className={css.breadcrumbs}>
        {links.map((title) => (
          <>
            <div className={css.link}>{title}</div>
            <div className={css.divider}>›</div>
          </>
        ))}
      </div>
      <h1 className={clsx('page-title', css.title)}>Shopping Cart</h1>
      <div className={css.content}>
        <div className={css.cart}>
          <div className={clsx(css.cartHead, css.cartRow)}>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          {cart.map((product) => (
            <div key={product.id} className={clsx(css.cartItem, css.cartRow)}>
              <div className={css.product}>
                <img src={product.image} alt="" />
                <p>{product.title}</p>
              </div>
              <p>{product.price.toFixed(2)}</p>
              {/* <input
                type="number"
                defaultValue={product.quantity}
                onChange={(e) => changeProductQty(product.id, e.target.value)}
              /> */}
              <p>{(product.price * product.quantity).toFixed(2)}</p>
              <div>x</div>
            </div>
          ))}
        </div>
        <div className={css.summary}>
          <Collapse title="Estimate Shipping and Tax">
            <p>Enter your destination to get a shipping estimate.</p>
            <p>Enter your destination to get a shipping estimate.</p>
            <p>Enter your destination to get a shipping estimate.</p>
          </Collapse>
          <Collapse title="Apply Discount Code" isOpen={true}>
            <p>Enter your destination to get a shipping estimate.</p>
            <p>Enter your destination to get a shipping estimate.</p>
            <p>Enter your destination to get a shipping estimate.</p>
          </Collapse>
        </div>
      </div>
      <div className={css.support}></div>
    </div>
  );
};

export default CardPage;
