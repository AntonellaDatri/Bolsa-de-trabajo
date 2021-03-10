import Navbar from '../../componets/Navbar'
import FormControl from '../../componets/FormControl'
import { useState } from 'react';
import rp from 'request-promise';

function CVForm() {
const [nombre, setNombre] =useState("");
const [apellido, setApellido] =useState("");
const [email, setEmail] =useState("");
const [tipoDoc, setTipoDoc] =useState("");
const [numDoc, setNumDoc] =useState("");
const [nacimiento, setNacimiento] =useState("");
const [carrera, setCarrera] =useState("");
const [año, setAño] =useState("");
const [experiencia, setExperiencia] =useState("");
const [error, setError] =useState(false);




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
        nombre,
        apellido,
        numDoc,
        tipoDoc,
        nacimiento,
        email,
        carrera,
        año,
        experiencia
    };
    const options = {
        url: "http://localHost:5000/alumnoBorrador",
        body: body,
        json: true,
    };
    rp.post(options).then(response => {
        window.location.href ="/SuccesfullyForm";
    }).catch(err => {
        console.log(err)
        setError(true)
    });
}

    return (
        <div>
            <Navbar/>
                   
            <form className="needs-validation container" onSubmit={onSubmitForm} noValidate>
                <FormControl.FormInput label = "Nombre" invalidMessage = "Pon tu nombre aqui" onChange = { ev => setNombre( ev.target.value) } type ="text"  />
                <FormControl.FormInput label = "Apellido" invalidMessage = "Pon tu apellido aqui" onChange = { ev => setApellido( ev.target.value) }  type ="text" />
                <FormControl.FormInput label = "Email" invalidMessage = "Debes proporcionar un email valido" onChange = { ev => setEmail( ev.target.value) }  type ="email" />
            
                <div className = "row g-2">  
                    <label className="form-label">Documento</label>
                    <div className="mb-3 col-md">
                        {/* Puede que no se actualiza de forma correcta el setTipoDoc. Cambiar a un FormInput*/}
                        <FormControl.Select option = "Tipo" invalidMessage = "Selecciona un tipo de documento" options ={["DNI", "CI"]} onChange = { ev => setTipoDoc( ev.target.value) }  type ="text" /> 
                    </div>
                    <div className="mb-3 col-md">
                        <FormControl.inputGroup invalidMessage = "Proporciona un numero de documento valido" simbol ="#" onChange = { ev => setNumDoc( ev.target.value) }  type ="number" />
                    </div>
                </div>

                <FormControl.FormInput label = "Fecha de nacimiento" invalidMessage = "Debes proporcionar tu fecha de nacimiento" onChange = { ev => setNacimiento( ev.target.value) }  type ="date" />

                <div className = "row g-2">  
                    <div className="mb-3 col-md">
                        <FormControl.FormInput label = "Carrera" invalidMessage = "Debes especificar que carrera que estas cursando" onChange = { ev => setCarrera( ev.target.value) }  type ="text" />
                    </div>
                    <div className="mb-3 col-md">
                        <FormControl.FormInput label = "Año" invalidMessage = "Debes proporcionar el año que estas cursando" onChange = { ev => setAño( ev.target.value) }  type ="number" />
                    </div>
                </div>
                
                <FormControl.TextareaInbox label ="Cuentanos sobre ti" invalidMessage ="Debes poner aqui tu experiencia laboral" onChange = { ev => setExperiencia( ev.target.value) }  type ="text" />
                {error && 
                    <p className = "fs-6 text-danger container-fluid ">Lo sentimos hubo un error al cargar los datos. Por favor revise que este todo correcto e intentelo de nuevo </p>
                }
                <div className="col-12 mb-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>
            

        </div>

        
    );
  }
  


  export default CVForm;
  