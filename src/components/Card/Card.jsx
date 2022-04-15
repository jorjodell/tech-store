import clsx from 'clsx';
import { ReactComponent as CheckAvbIcon } from '../../assets/check_availability.svg';
import { ReactComponent as InStockIcon } from '../../assets/in_stock.svg';
import css from './card.module.css';

function InStockStatus() {
  return (
    <small className={clsx(css.status, css.instock)}>
      <InStockIcon />
      <span>in stock</span>
    </small>
  );
}

function CheckAvlStatus() {
  return (
    <small className={css.status}>
      <CheckAvbIcon />
      <span>check availability</span>
    </small>
  );
}

function Card({ isInStock, title, priceOld, price, image }) {
  return (
    <article className={css.card}>
      {isInStock ? <InStockStatus /> : <CheckAvlStatus />}
      <img src={image} alt="" className={css.image} />
      <div className="review"></div>
      <h1 className={css.title}>{title}</h1>
      <p className={css.priceOld}>{priceOld}.00 $</p>
      <p className={css.price}>{price}.00 $</p>
    </article>
  );
}

export default Card;
