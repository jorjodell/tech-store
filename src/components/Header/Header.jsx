import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import css from './header.module.css';
import { useState } from 'react';
import Search from '../Search';

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const links = [
    {href: "/category/laptops", title: 'Laptops'},
    {href: "/category/desktops", title: 'Desktop PCs'},
  ]

  return (
    <header className={css.header}>
      <div className={css.top}>
        <div className={clsx('container', css.topContent)}>
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
          <Logo className={css.logo} />
        </Link>
        {isSearch ? (
          <Search />
        ) : (
          <nav className={css.links}>
            {links.map((link) => (
              <Link
                className={clsx({ [css.active]: link.href === activeLink })}
                key={link.href}
                to={link.href}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink('')}
              >{link.title}</Link>
            ))}
          </nav>
        )}
        <div className={css.actions}>
          <button className="btn--icon" onClick={() => setIsSearch(!isSearch)}>
            {isSearch ? <CloseIcon /> : <SearchIcon />}
          </button>
          <Link
            to="/cart"
            data-count={0}
            className={clsx('btn--icon', css.cartBtn)}
          >
            <CartIcon />
          </Link>
          <button className={css.avatar}>
            <img
              src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
