import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top__content">
          <div className="header-top__schedule">Mon-Thu: 9:00 AM - 5:30 PM</div>
          <p className="header-top__address">
            Visit our showroom in 1234 Street Adress City Address, 1234{' '}
            <a href="#">Contact Us</a>
          </p>
          <div className="header-top__contacts">
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
      <div className="container header-main">
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
        <div className="actions">
          <button className="btn">
            <SearchIcon />
          </button>
          <button className="btn">
            <img src="" alt="" />
          </button>
          <button className="avatar">
            <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
