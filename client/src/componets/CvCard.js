import React, {useState, useEffect} from 'react';
import rp from 'request-promise';


function CVCard(props) {
  const {aprob, buttons} = props;  
  const [cvs, setCvs] = useState([]); 

  useEffect(() => {
      setCvs([]);
      const options = {
          url: `http://localHost:5000/alumnos/${aprob}`,
          json: true,
      };
      rp.get(options).then(response => {
          setCvs(response)
      }).catch(err => console.log(err.message));

  },[])

  const accept= async (e,id) => {
    e.preventDefault()
    console.log(id);
    const options = {
        url:`http://localhost:5000/alumnos/${id}`,
        json: true,
    };
    rp.put(options).then(response => {
      document.getElementById(id).remove();
    }).catch(err => console.log(err.message));
  }

  const decline= async (e,id) => {
    e.preventDefault()
    console.log(id);
    const options = {
        url:`http://localhost:5000/alumnos/${id}`,
        json: true,
    };
    rp.delete(options).then(response => {
      document.getElementById(id).remove()
    }).catch(err => console.log(err.message));
  } 

    


  return (
    <>
      {cvs.map(cv => (
        <div key={cv.id} id={cv.id}  >
            
            <div className="card">
              <h5 className="card-header">{cv.nombre} {cv.apellido}</h5>
              <div className="card-body">
                  <p className="card-text">{cv.tipodni}: {cv.iddni}</p>
                  <p className="card-text">Fecha de nacimiento: {cv.fechanacimiento.substr(0, 10)}</p>
                  <p className="card-text">Email: {cv.mail}</p>
                  <p className="card-text">Carrera: {cv.carrera}</p>
                  <p className="card-text">Año de inicio de la carrera: {cv.anioinicio}</p>
                  <p className="card-text">Experiencia laboral: {cv.experiencia}</p>

                  {
                    buttons && 
                    <div>
                        <button className="btn btn-success" type="submit" onClick={e => accept(e, cv.id)}>Aceptar</button>
                        <button className="btn btn-danger" type="submit"  onClick={e => decline(e, cv.id)}>Eliminar</button>
                    </div> 
                  }

              </div>
            </div>
          </div>
      ))}
  </>
  );
}

export default CVCard;
