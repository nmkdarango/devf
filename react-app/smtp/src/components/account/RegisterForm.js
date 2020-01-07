import React, { useState } from "react";
import axios from 'axios';
import {API_URL} from '../../config';
import {Redirect} from 'react-router-dom';

function RegisterForm(){

    const [typeAlert, setTypeAlert] = useState('light');
    const [alertText, setAlertText] = useState('Cargando...')
    const [loading, setLoading] = useState(false);
    const [toHome, setToHome] = useState(false);

    const [formValues, setFormValues] = useState({
        username:"",
        password:"",
        firstname:"",
        lastname:""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTypeAlert('light');
        setAlertText('Cargando...');

        axios.post(API_URL+"user/create", formValues,
        {
            responseType: 'json',
        }).then((result) => {
            setTypeAlert('success');
            setAlertText('Usuario creado correctamente');
            setToHome(true);
        }).catch((error) => {
            setTypeAlert('danger');
            if(error.response && error.response.status===409){
                setAlertText('El usuario ya está en uso');
            }else{
                setAlertText('Ocurrió un error: '+ error.message);  
            } 
            
            
        });

    };
    const handleFormValues=(event)=>{
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [event.target.name]: value
        });
        
    };
    return (
        <>
        { toHome ? <Redirect to="/" />:null }
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                <h5>Información de acceso</h5>
                <div className="form-group">
                    <label htmlFor="usernameComponent">Usuario</label>
                    <input  name="username" type="text" required className="form-control" id="usernameComponent" placeholder="Ingrese su nombre de usuario"  value={formValues.username} onChange={handleFormValues} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordComponent">Contraseña</label>
                    <input name="password" type="password" required className="form-control" id="passwordComponent" placeholder="Ingrese su contraseña"  value={formValues.password} onChange={handleFormValues} />
                </div>
                </div>
                <div className="col">
                    <h5>Información personal</h5>
                    <div className="form-group">
                        <label htmlFor="firstnameComponent">Nombre</label>
                        <input name="firstname" type="text" required className="form-control" id="firstnameComponent" placeholder="Ingrese su nombre"  value={formValues.firstname} onChange={handleFormValues} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastnameComponent">Apellido</label>
                        <input name="lastname" type="text" required className="form-control" id="lastnameComponent" placeholder="Ingrese su apellido"  value={formValues.lastname} onChange={handleFormValues} />
                    </div>
                </div>
            </div>
            
            
            <div className="form-group">
                { loading &&
                    <div className={'alert alert-'+typeAlert} role="alert">
                        {alertText}
                    </div>
                }     
            </div>
            <button className="btn btn-success" type="submit">Registrarme</button>
        </form>
        </>
    )
}
export default RegisterForm; 