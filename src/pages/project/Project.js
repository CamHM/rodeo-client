import image from '../../assets/project-dogs.PNG';
import TitleSection from '../../components/titleSection/TitleSection';
import One from '../../assets/project-1.png';
import Two from '../../assets/project-2.png';
import Three from '../../assets/project-3.png';
import Four from '../../assets/project-4.png';
import Five from '../../assets/project-5.png';
import Six from '../../assets/project-6.png';
import Seven from '../../assets/project-7.png';
import Eight from '../../assets/project-8.png';
import './Project.css';

const Project = () => {
  return (
    <div className='project' id='project'>
      <div className='project__top'>
        <img src={image} alt='project' />
        <div className='project__top--left'>
          <TitleSection text='Proyecto' />
          <br />
          <h3>
            Remanso del Rodeo, un proyecto ubicado en Belén, sector Rodeo Alto, un lugar exclusivo
            con entorno campestre, excelente valorización y una vista inigualable sobre Rodeo Alto y
            gran parte de la ciudad de Medellín.
          </h3>
          <br />
          <h3>
            Cuenta con beneficios únicos de movilidad, cercanía a lugares comerciales, además de
            tener difetentes vías de acceso.
          </h3>
          <br />
          <b>Cercano a:</b>
          <br />
          <ul>
            <li>Clínica las Américas</li>
            <li>Club el Rodeo</li>
            <li>Carrera 80</li>
            <li>Guayabal</li>
            <li>La Mota</li>
            <li>Aeropuerto Olaya Herrera</li>
            <li>Parque Juan Palo II</li>
            <li>Sector Comercial Guayabal</li>
            <li>Éxito de la Gran Vía</li>
          </ul>
        </div>
      </div>
      <div className='project__bottom'>
        <TitleSection text='Zonas comúnes' />
        <div className='project__bottom-title'>
          <h1>Un lugar exclusivo para brindarte a ti y</h1>
          <h1>a tu familia todo lo que necesitan.</h1>
        </div>
        <div className='project__bottom-images'>
          <img src={One} alt='Portería 24 horas' />
          <img src={Two} alt='Salón social' />
          <img src={Three} alt='Circuito cerrado de televisión' />
          <img src={Four} alt='Parqueadero para visitantes' />
          <img src={Five} alt='Juegos infantiles' />
          <img src={Six} alt='Gimnasio semidotado' />
          <img src={Seven} alt='Piscina de adultos y niños' />
          <img src={Eight} alt='Cancha multifuncional recreativa' />
        </div>
      </div>
    </div>
  );
};

export default Project;
