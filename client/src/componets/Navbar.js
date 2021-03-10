import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import rp from 'request-promise';


function Navbar() {
    const token = sessionStorage.getItem("accessToken")
    const [draftsBtn, setDraftsBtn] = useState(false)

    useEffect(() => {
        const options = {
            url: "http://localHost:5000/user/posts",
            headers : {"authorization" : token},
            json: true,
        };
        rp.post(options).then(response => {
            setDraftsBtn(true)
        }).catch(err => {
        });
  
     }, [])
  return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
           <div className="container-fluid">
                <Link className="navbar-brand  fs-1" to="/">Bolsa de trabajo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/Companies">Ver empleos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CVs">Ver CVs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CompanyForm">Publicar empleo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CVForm">Publicar CV</Link>
                        </li>
                        {draftsBtn && 
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/Drafts">borradores</Link>
                            </li>
                        }
                    </ul>
                    
                    <Link to="/Login" className="btn btn-dark position fs-5" role="button" >Login</Link>
                </div>
        
                
            </div>
        </nav>
  );
}

export default Navbar;
