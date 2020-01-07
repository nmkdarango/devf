import React, {useState} from 'react';
import axios from 'axios';
import {API_URL, TOKEN_PREFIX} from '../../config';

function SmtpForm({onHandleCloseModal, userId}){
    
    const [typeAlert, setTypeAlert] = useState('light');
    const [alertText, setAlertText] = useState('Cargando...')
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        user:"",
        password:"",
        host:"",
        description:""
    });

    const handleFormValues=(event)=>{
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [event.target.name]: value
        });
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTypeAlert('light');
        setAlertText('Cargando...');
        new Promise((resolve,reject)=>{
            if(userId){
                axios.post(API_URL+"smtp/create/"+userId, formValues, {
                    headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
                }).then((result) => {
                    resolve(result);
                }).catch(error=>{
                    reject(error);
                })
            }else{
                axios.post(API_URL+"smtp/createCurrentUser", formValues, {
                    headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
                }).then((result) => {
                    resolve(result);
                }).catch(error=>{
                    reject(error);
                })
            }
        }).then((result) => {
            setTypeAlert('success');
            setAlertText('SMTP creado correctamente');
            onHandleCloseModal();
        }).catch((error) => {
            setTypeAlert('danger');
            setAlertText('Ocurrió un error: '+ error.message);
        });


    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="descriptionComponent">Descripción</label>
                <input type="text" name="description" className="form-control" id="descriptionComponent" placeholder="Ingrese una descripción, ej: Gmail de trabajo"  value={formValues.description} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                <label htmlFor="hostComponent">Host</label>
                <input type="text" name="host" required className="form-control" id="hostComponent" placeholder="Ingrese su host, ej: smtp.gmail.com"  value={formValues.host} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                <label htmlFor="userComponent">Correo</label>
                <input type="email" name="user" required className="form-control" id="userComponent" placeholder="Ingrese su correo electrónico"  value={formValues.user} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                <label htmlFor="passwordComponent">Contraseña</label>
                <input name="password" type="password" required className="form-control" id="passwordComponent" placeholder="Ingrese su contraseña"  value={formValues.password} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                { loading &&
                    <div className={'alert alert-'+typeAlert} role="alert">
                        {alertText}
                    </div>
                }       
            </div>
            <button className="btn btn-success" type="submit">Agregar</button>
        </form>
    );
}

export default SmtpForm;