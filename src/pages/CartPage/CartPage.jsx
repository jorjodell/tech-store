import clsx from 'clsx';
import Collapse from '../../components/Collapse/Collapse';
import css from './card-page.module.css';

const CardPage = () => {
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
      <h1 className={clsx("page-title", css.title)}>
        Shopping Cart
      </h1>
      <div className={css.content}>
        <div className={css.cart}>
          <div className={clsx(css.cartHead, css.cartRow)}>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          <div className={clsx(css.cartItem, css.cartRow)}>
            <div>
              <img src="" alt="" />
              <p>
                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB
                RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
                Warranty
              </p>
            </div>
            <p>$4,349.00</p>
            <input type="number" />
            <p>$13,047.00</p>
            <div>x</div>
          </div>
          <div className={clsx(css.cartItem, css.cartRow)}>
            <div>
              <img src="" alt="" />
              <p>
                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB
                RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
                Warranty
              </p>
            </div>
            <p>$4,349.00</p>
            <input type="number" />
            <p>$13,047.00</p>
            <div>x</div>
          </div>
          <div className={clsx(css.cartItem, css.cartRow)}>
            <div>
              <img src="" alt="" />
              <p>
                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB
                RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
                Warranty
              </p>
            </div>
            <p>$4,349.00</p>
            <input type="number" />
            <p>$13,047.00</p>
            <div>x</div>
          </div>
          <div className={css.cartActions}>
            <button className={clsx("btn btn--outline", css.cartBtnOutline)}>
              Continue Shopping
            </button>
            <button className={clsx("btn", css.cartBtn)}>Clear Shopping Cart</button>
            <button className={clsx("btn", css.cartBtn)}>Update Shopping Cart</button>
          </div>
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
