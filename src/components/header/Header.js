import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
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
    </header>
  );
};

export default Header;
