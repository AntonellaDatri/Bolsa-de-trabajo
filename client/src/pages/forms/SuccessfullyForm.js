import Navbar from '../../componets/Navbar'
import { Link } from 'react-router-dom';

import '../../App.css';


function Home() {
    return (
        <>
            <Navbar/>
            <p className="fs-5 text-success container-fluid ">
                Tu formulario fue cargado exitosamente. <Link to="/" className="text-reset">Volver a la paguina de inicio</Link>.
            </p>
        </>
    );
  }
  
  export default Home;