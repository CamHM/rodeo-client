import './Promo.css';

const Promo = () => {
  return (
    <div className='promo'>
      <div className='promo__header'>
        <h1 className='promo__title'>
          Obtén <span className='promo__title promo__text--bold'>bono</span> de
        </h1>
        <h1 className='promo__price promo__text--bold'>$2'000.000</h1>
      </div>
      <div className='promo__middle-section'>
        <h1 className='promo__middle__text'>
          Lugar <span className='promo__middle__text promo__text--bold'>exclusivo</span>
        </h1>
        <h1 className='promo__middle__secondary-text'>
          <span className='promo__middle__secondary-text--small'>con </span> entorno campestre,
        </h1>
      </div>
      <div className='promo__bottom'>
        <span className='promo__bottom-text--short promo__text--bold'>Y una </span>
        <h1 className='promo__bottom-text'> vista inigualable</h1>
      </div>
      <hr />
      <h1 className='promo__end-text'>
        Medellín Belén{' '}
        <span className='promo__end-text promo__text--bold'>- sector Rodeo Alto</span>
      </h1>
    </div>
  );
};

export default Promo;
