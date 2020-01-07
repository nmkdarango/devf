import React, { useState } from "react";
import axios from 'axios';
import {API_URL} from '../../config';

function LoginForm({onHandleCloseModal}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [typeAlert, setTypeAlert] = useState('light');
    const [alertText, setAlertText] = useState('Cargando...')
    const [loading, setLoading] = useState(false);

    const handleChangeUsername = (event) => {
        setUsername( event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword( event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTypeAlert('light');
        setAlertText('Cargando...');

        axios.post(API_URL+"user/login",
        {
            "username":username,
            "password":password
        },
        {
            responseType: 'json',
        }).then((result) => {
            setTypeAlert('success');
            setAlertText('Usuario correcto');
            localStorage.setItem('app_token', result.data.token);
            localStorage.setItem('app_login',true);
            localStorage.setItem('app_firstname',result.data.user.firstname);
            localStorage.setItem('app_superuser',result.data.user.superuser);
            localStorage.setItem('id',result.data.user._id);
            onHandleCloseModal();
        }).catch((error) => {
            setTypeAlert('danger');
            if(error.response && error.response.status===401){

                setAlertText('Usuario o contraseña incorrecta');
            }else{
                setAlertText('Ocurrió un error: '+ error.message);        
            }
            
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="usernameComponent">Usuario</label>
                <input type="text" required className="form-control" id="usernameComponent" placeholder="Ingrese su nombre de usuario"  value={username} onChange={handleChangeUsername} />
            </div>
            <div className="form-group">
                <label htmlFor="passwordComponent">Contraseña</label>
                <input type="password" required className="form-control" id="passwordComponent" placeholder="Ingrese su contraseña"  value={password} onChange={handleChangePassword} />
            </div>
            <div className="form-group">
                { loading &&
                    <div className={'alert alert-'+typeAlert} role="alert">
                        {alertText}
                    </div>
                }       
            </div>
            <button className="btn btn-success" type="submit">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;