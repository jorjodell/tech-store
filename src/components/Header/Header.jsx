import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useStore } from '../../store/context';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import {ReactComponent as CartIcon } from '../../assets/cart.svg';
import css from './header.module.css';

function Header() {
  const { cart } = useStore();
  return (
    <header className={css.header}>
      <div className={css.top}>
        <div className={css.topContent}>
          <div className={css.topSchedule}>Mon-Thu: 9:00 AM - 5:30 PM</div>
          <p className={css.topAddress}>
            Visit our showroom in 1234 Street Adress City Address, 1234{' '}
            <a href="#">Contact Us</a>
          </p>
          <div className={css.topContacts}>
            <div className="header-top__phone">
              Call Us: <a href="tel:0012345678">(00) 1234 5678</a>
            </div>
            <a href="https://facebook.com">
              <img src="" alt="F" />
            </a>
            <a href="https://instagram.com">
              <img src="" alt="I" />
            </a>
          </div>
        </div>
      </div>
      <div className={clsx('container', css.main)}>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <nav className="links">
          <Link to="/category/laptops">Laptops</Link>
          <Link to="/category/desktops">Desktop PCs</Link>
          <Link to="/category/networking-devices">Networking Devices</Link>
          <Link to="/category/pc-parts">PC Parts</Link>
          <Link to="/category/other">All Other Products</Link>
          <Link to="/repairs">Repairs</Link>
          <Link to="/our-deals">Our Deals</Link>
        </nav>
        <div className={css.actions}>
          <button className="btn">
            <SearchIcon />
          </button>
          <Link to="/cart" data-count={cart.length} className={clsx("btn--icon", css.cartBtn)}>
            <CartIcon />
          </Link>
          <button className={css.avatar}>
            <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
