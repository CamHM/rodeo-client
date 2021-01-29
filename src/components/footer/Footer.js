import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer__title'>Sala de negocios</h1>
      <div className='footer__badges'>
        {badges.map(badge => (
          <div key={`badge-${badge.id}`} className='footer__badge'>
            <i className={`fa fa-${badge.icon} fa-3x`} />
            <b>{badge.label}:</b>
            <p>{badge.text}</p>
          </div>
        ))}
      </div>
      <p className='footer__bottom-text'>
        La imágenes utilizadas son representaciones digitales del diseño y junto con las oficinas,
        locales y apartamentos pueden variar en la contrucción final. El mobiliario,
        electrodomésticos, gasodomésticos, acabados y demás elementos que aparecen en las imágenes
        son una representación a fin de ilustrar la utilización de los espacios y pueden diferir de
        lo entregado o no ser entregado según lo convenido en los contratos. Las áreas privadas y
        construidas podrán sufrir ajustes y quedarán finalmente determinadas en los contratos
        suscritos por las partes.
      </p>
    </div>
  );
};

const badges = [
  {
    id: 1,
    icon: 'mobile-alt',
    label: 'Tel',
    text: '3439241 - 3137050212',
  },
  {
    id: 2,
    icon: 'map-marker-alt',
    label: 'Dirección',
    text: 'Calle 6 sur # 79 - 158 Medellín',
  },
  {
    id: 3,
    icon: 'clock',
    label: 'Hora de Atención',
    text: '10:00 am - 5:30 pm',
  },
  {
    id: 4,
    icon: 'at',
    label: 'Correo',
    text: 'remansodelrodeo@une.net.co',
  },
];

export default Footer;
