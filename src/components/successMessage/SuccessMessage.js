import './SuccessMessage.css';

const SuccessMessage = () => {
  return (
    <div className='success-message'>
      <h1 className='success-message__text'>
        Datos recibidos{' '}
        <span className='success-message__text success-message__text--bold'>correctamente.</span>
      </h1>
      <h1 className='success-message__secondary-text'>
        Pronto uno de nuestros asesores se pondrá en contacto contigo.
      </h1>
    </div>
  );
};

export default SuccessMessage;
