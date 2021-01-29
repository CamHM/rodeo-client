import { useState } from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomTextarea from '../../components/customTextarea/CustomTextarea';
import Promo from '../../components/promo/Promo';
import SuccessMessage from '../../components/successMessage/SuccessMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { postData } from '../../config/client';
import './Home.css';

const phoneRegex = /^([0-9]{10})|([0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2})$/;

const initialValues = {
  name: '',
  email: '',
  phone: '',
  city: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('Correo inválido').required('El correo es requerido'),
  phone: Yup.string().required('El teléfono es requerido').matches(phoneRegex, 'Teléfono inválido'),
  city: Yup.string().required('La ciudad es requerida'),
  comment: Yup.string().required('El comentario es requerido'),
});

const Home = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    setError('');
    postData('people', values)
      .then(() => {
        resetForm();
        setIsSaved(true);
        setLoading(false);
      })
      .catch(({ error }) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className='home' id='home'>
      <div className='home__box'>
        <div className='home__promo'>
          <Promo />
        </div>
        <div className='home__form'>
          {!isSaved ? (
            <>
              <div className='home__header'>
                <h1 className='home__form__title'>¡Déjanos tus datos y te</h1>
                <h1 className='home__form__title home__form__title--bold'>
                  mantendremos informado!
                </h1>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {props => (
                  <form onSubmit={props.handleSubmit}>
                    <CustomInput name='name' placeholder='Nombre' required />
                    <CustomInput name='email' placeholder='Correo Electrónico' required />
                    <CustomInput name='phone' placeholder='Teléfono' required />
                    <CustomInput name='city' placeholder='Ciudad' required />
                    <CustomTextarea name='comment' placeholder='Comentario' required rows={4} />
                    <p className='home__form__terms'>
                      Al hacer clic en enviar, estás asceptando los{' '}
                      <span className='home__form__terms--bold'>términos y condiciones</span>
                    </p>
                    {error && <p className='home__error-message'>{error}</p>}
                    <button
                      className='home__form__button'
                      type='submit'
                      disabled={Object.keys(props.errors).length > 0 || loading}
                    >
                      Enviar
                    </button>
                  </form>
                )}
              </Formik>
            </>
          ) : (
            <SuccessMessage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
