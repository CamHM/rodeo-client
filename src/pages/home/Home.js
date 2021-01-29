import CustomInput from '../../components/customInput/CustomInput';
import CustomTextarea from '../../components/customTextarea/CustomTextarea';
import Promo from '../../components/promo/Promo';
import './Home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home__box'>
        <div className='home__promo'>
          <Promo />
        </div>
        <div className='home__form'>
          <div className='home__header'>
            <h1 className='home__form__title'>¡Déjanos tus datos y te</h1>
            <h1 className='home__form__title home__form__title--bold'>mantendremos informado!</h1>
          </div>
          <CustomInput name='name' placeholder='Nombre' required />
          <CustomInput name='email' placeholder='Correo Electrónico' required />
          <CustomInput name='phone' placeholder='Teléfono' required />
          <CustomInput name='city' placeholder='Ciudad' required />
          <CustomTextarea name='comment' placeholder='Comentario' required rows={4} />
          <p className='home__form__terms'>
            Al hacer clic en enviar, estás aceptando los{' '}
            <span className='home__form__terms--bold'>términos y condiciones</span>
          </p>
          <button className='home__form__button'>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
