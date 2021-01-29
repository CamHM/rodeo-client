import './Menu.css';

const Menu = ({ onClose }) => {
  return (
    <div className='menu'>
      <button className='menu__close' onClick={onClose}>
        <i className='fa fa-times fa-3x' />
      </button>
      <div className='menu__content'>
        <a href='#home' onClick={onClose}>
          Inicio
        </a>
        <a href='#project' onClick={onClose}>
          Proyecto
        </a>
        <a href='#project' onClick={onClose}>
          Galería
        </a>
        <a href='#project' onClick={onClose}>
          Apartamentos
        </a>
        <a href='#project' onClick={onClose}>
          Mapa
        </a>
        <a href='#project' onClick={onClose}>
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Menu;
