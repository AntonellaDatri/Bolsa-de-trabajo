import React, {useState, useEffect} from 'react';
import rp from 'request-promise';


function AnnouncementCard(props) {
  const {aprob, buttons} = props;  
  const [puestos, setPuestos] = useState([]);
  const [id, setId] = useState(""); 

    useEffect(() => {
        setPuestos([]);
        
        const options = {
            url: `http://localHost:5000/empresas/${aprob}`,
            json: true,
        };
        rp.get(options).then(response => {
            setPuestos(response)
        }).catch(err => console.log(err.message));

    },[id])


    const accept= async (e,id) => {
      e.preventDefault()
      console.log(id);
      const options = {
          url:`http://localhost:5000/empresas/${id}`,
          json: true,
      };
      rp.put(options).then(response => {
        setId(id)
      }).catch(err => console.log(err.message));
    }
  
    const decline= async (e,id) => {
      e.preventDefault()
      console.log(id);
      const options = {
          url:`http://localhost:5000/empresas/${id}`,
          json: true,
      };
      rp.delete(options).then(response => {
        setId(id)
      }).catch(err => console.log(err.message));
    }


  return (
    <>
    
      {puestos.map(puesto => (
        <div key={puesto.id} id={puesto.id}>
          <div className="card">
            <h5 className="card-header">{puesto.nombre}</h5>
            <div className="card-body">
                <p className="card-text">cuit: {puesto.cuit}</p>
                <p className="card-text">Sede: {puesto.direccion}, {puesto.localidad}, {puesto.provincia}</p>
                <p className="card-text">Email: {puesto.mail}</p>
                <p className="card-text">telefono: {puesto.telefono}</p>
                <p className="card-text">Tiempo de la convocatoria: {puesto.iniciodelaconv.substr(0, 10)} - {puesto.findelaconv.substr(0, 10)} </p>
                <p className="card-text">Descripcion del puesto: {puesto.descppuesto}</p>

                {
                    buttons && 
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-success" type="button" onClick={e => accept(e, puesto.id)}>Aceptar</button>
                        <button className="btn btn-danger " type="button" onClick={e => decline(e, puesto.id)}>Eliminar</button>
                    </div> 
                  }
            </div>
          </div>
        </div>
      ))}
    </>
    
  );
}

export default AnnouncementCard;
