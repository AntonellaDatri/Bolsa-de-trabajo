import Navbar from '../componets/Navbar'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Navbar/>

            <div className="position-initial-btn">
                <div className="row btn-display">
                    <Link className="btn btn-primary btn-size fs-3 " to="/Companies" role="button">Ver empleos</Link>
                    <Link className="btn btn-info btn-size fs-3 " to="/CVs" role="button">Ver curriculums</Link>
                </div>
            
            <div className="row btn-display">
                    <Link className="btn btn-outline-primary btn-size fs-3 " to="/CompanyForm" role="button">Publicar empleo</Link>
                    <Link className="btn btn-outline-info btn-size fs-3" to="/CVForm" role="button">Publicar curriculum</Link>
                </div>
        </div>

        </>
    );
  }
  
  export default Home;