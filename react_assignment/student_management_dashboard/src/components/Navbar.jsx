import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ logoText }) => {
  const location = useLocation();
  const favoritesCount = useSelector(state => state.favorites.favorites.length);

  return (
    <nav className="navbar">
      <div className="navbar-logo">{logoText}</div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/students' ? 'active' : ''}>
          <Link to="/students">Students</Link>
        </li>
        <li className={location.pathname === '/favorites' ? 'active' : ''}>
          <Link to="/favorites">Favorites ({favoritesCount})</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;