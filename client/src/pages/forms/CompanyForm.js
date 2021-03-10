import Navbar from '../../componets/Navbar'
import FormControl from '../../componets/FormControl'
import { useState } from 'react';
import rp from 'request-promise';


function CompanyForm() {
    const [nombre, setNombre] =useState("");
    const [cuit, setCuit] =useState("");
    const [provincia, setProvincia] =useState("");
    const [localidad, setLocalidad] =useState("");
    const [direccion, setDireccion] =useState("");
    const [telefono, setTelefono] =useState("");
    const [mail, setMail] =useState("");
    const [inicioDeLaConv, setInicioDeLaConv] =useState("");
    const [finDeLAConv, setFinDeLAConv] =useState("");
    const [descpPuesto, setDescpPuesto] =useState("");


    
const verifyFields = (() => {
    'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, false);
    form.classList.add('was-validated');
  });
});

const onSubmitForm = async e => {
    e.preventDefault()
    verifyFields()
    const body = {
        nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto
    };
    const options = {
        url: "http://localHost:5000/empresaBorrador",
        body: body,
        json: true,
    };
    rp.post(options).then(response => {
        window.location.href ="/SuccesfullyForm";
    }).catch(err => {
        console.log(err.message)
        verifyFields()
    });
}


    return (
        <>
            <Navbar/>
            <form className="needs-validation container" onSubmit={onSubmitForm} noValidate>
                <FormControl.FormInput label = "Nombre" invalidMessage = "Pon el nombre de la compania aqui" onChange = { ev => setNombre( ev.target.value) }  type ="text" />
                <FormControl.FormInput label = "CUIT" invalidMessage = "Especifica el CUIT de la compania" onChange = { ev => setCuit( ev.target.value) } type ="number" />
                <FormControl.FormInput label = "Provincia" invalidMessage = "Debes proporcionar la provincia en la que se encuentra tu compania" onChange = { ev => setProvincia( ev.target.value) } type ="text" />
                <FormControl.FormInput label = "Localidad" invalidMessage = "Debes proporcionar la localidad en la que se encuentra tu compania" onChange = { ev => setLocalidad( ev.target.value) } type ="text" />
                <FormControl.FormInput label = "Direccion" invalidMessage = "Debes proporcionar la Direccion en la que se encuentra tu compania" onChange = { ev => setDireccion( ev.target.value) } type ="text" />
                <FormControl.FormInput label = "Telefono" invalidMessage = "Debes proporcionar el telefono de tu compania" onChange = { ev => setTelefono( ev.target.value) } type ="number" />
                <FormControl.FormInput label = "Mail" invalidMessage = "Debes proporcionar un mail de contacto" onChange = { ev => setMail( ev.target.value) } type ="mail" />
           
                <div className = "row g-2">  
                    <label className="form-label">Duracion de la convocatoria</label>
                    <div className="mb-3 col-md">
                        <FormControl.inputGroup invalidMessage = "Proporciona una fecha de inicio de la convocatoria" simbol ="Fecha de inicio" onChange = { ev => setInicioDeLaConv( ev.target.value) } type ="date" />
                    </div>
                    <div className="mb-3 col-md">
                        <FormControl.inputGroup invalidMessage = "Proporciona una fecha de fin de la convocatoria" simbol ="Fecha de fin" onChange = { ev => setFinDeLAConv( ev.target.value) } type = "date"/>
                    </div>
                </div>

                <FormControl.TextareaInbox label ="Descripcion del puesto" invalidMessage ="Debes poner una descripcion del puesto" onChange = { ev => setDescpPuesto( ev.target.value) } type = "text"/>

                <div className="col-12 mb-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </>
    );
  }
  
  export default CompanyForm;