import { useState } from 'react';
import Navbar from '../componets/Navbar'
import FormControl from '../componets/FormControl'
import rp from 'request-promise';


function Login() {
    const [user, setUser] =useState();
    const [password, setPassword] =useState();
    const [err, setErr] =useState(false);
    
    
    
    
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
        verifyFields()
         e.preventDefault()
        const body = {
            userid: user,
            password
        };
        const options = {
            url: "http://localHost:5000/user/login",
            body: body,
            json: true,
        };
        rp.post(options).then(res => {
            sessionStorage.setItem('accessToken', res.token)
            window.location.href ="/Drafts";
        }).catch(err => {
            setErr(true)
            console.log(err.message)
        });
        
    }

    const errMessege =
    <p className="fs-6 text-danger container-fluid ">
        El ususario o contraseña que ingresaste es incorrecto.
    </p>
    
        return (
            <div>
                <Navbar/>
                <div className ="box-login"> 
                    <form className="needs-validation container-login" onSubmit={onSubmitForm} noValidate>
                        <FormControl.FormInput label = "Usuario" invalidMessage = "Completa este campo" onChange = { ev => setUser( ev.target.value) } type ="text"  />
                        <FormControl.FormInput label = "Contraseña" invalidMessage = "Completa este campo" onChange = { ev => setPassword( ev.target.value) }  type ="password" />
                        {err && errMessege}
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary " type="submit">Iniciar Sesion</button>
                        </div>
                    </form>
                </div>
            </div>
    
            
        );
  }
  
  export default Login;