import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Menu from '../menu/Menu';
import './Header.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <header className='header'>
      <a href='#home'>
        <img src={Logo} alt='logo' className='header__logo' />
      </a>
      <ul>
        <li>
          <a href='#project'>Proyecto </a>
        </li>
        <span className='header__divider'>|</span>
        <li>
          <a href='#project'>Galería</a>
        </li>
        <span className='header__divider'>|</span>
        <li>
          <a href='#project'>Apartamentos</a>
        </li>
        <span className='header__divider'>|</span>
        <li>
          <a href='#project'>Mapa</a>
        </li>
        <span className='header__divider'>|</span>
        <li>
          <a href='#project'>Contacto</a>
        </li>
      </ul>
      <button className='header__menu' onClick={handleOpenMenu}>
        <i className='fa fa-bars fa-3x' />
      </button>
      {openMenu && <Menu onClose={handleOpenMenu} />}
    </header>
  );
};

export default Header;
