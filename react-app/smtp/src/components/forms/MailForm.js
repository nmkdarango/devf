import React, {useState} from 'react';
import parser from 'cron-parser';
import axios from 'axios';
import {TOKEN_PREFIX, API_URL} from '../../config'

function MailForm({onHandleCloseModal, smtpId}){
    const [formValues, setFormValues] = useState({
        subject:"",
        message:"",
        to:"",
        recurrency:false,
        crontab:"",
        end:""

    });
    const [nextDate, setNextDate] = useState(null);
    const [typeAlert, setTypeAlert] = useState('light');
    const [alertText, setAlertText] = useState('Cargando...')
    const [loading, setLoading] = useState(false);

    const handleFormValues = (event)=>{
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [event.target.name]: value
        });
    }
    const handleRecurrency = (event)=>{
        const value = event.target.checked;
        setFormValues({
            ...formValues,
            [event.target.name]: value
        });
    }

    const handleCron = (event) => {
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [event.target.name]: value
        });
        try {
            const interval = parser.parseExpression(value);
            setNextDate(interval.next());
        }catch(err){
            setNextDate(null);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setLoading(true);
        setTypeAlert('light');
        setAlertText('Cargando...');
        let values = {
            subject: formValues.subject,
            message: formValues.message,
            to: formValues.to,
            smtp: smtpId
        };
        if(formValues.recurrency){
            values.recurrency = {
                crontab: formValues.crontab,
                end: new Date(formValues.end),
                next: nextDate,
                enable:true
            };
        }
        axios.post(API_URL+"mail/create", values, {
            headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
        }).then((result) => {
            setTypeAlert('success');
            setAlertText('SMTP creado correctamente');
            onHandleCloseModal();
        }).catch((error) => {
            setTypeAlert('danger');
            setAlertText('Ocurrió un error: '+ error.message);
        });
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="subjectComponent">Asunto</label>
                <input type="text" name="subject" className="form-control" id="subjectComponent" placeholder="Ingrese el asunto"  value={formValues.subject} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                <label htmlFor="messageComponent">Mensaje</label>
                <textarea name="message" className="form-control" id="messageComponent" placeholder="Ingrese el mensaje"  value={formValues.message} onChange={handleFormValues}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="toComponent">Para</label>
                <input type="text" name="to" className="form-control" id="toComponent" placeholder="Ingrese los correos separados por coma"  value={formValues.to} onChange={handleFormValues} />
            </div>
            <div className="form-group">
                <label><input type="checkbox" name="recurrency" checked={formValues.recurrency} onChange={handleRecurrency} /> Agregar correos recurrentes</label>
            </div>
            <div className={(formValues.recurrency?"d-block":"d-none")}>
                <div className="form-group">
                    <label htmlFor="crontabComponent">Cron</label>
                    <input type="text" name="crontab" disabled={!formValues.recurrency} className="form-control" id="crontabComponent" placeholder="* * * * * *"  value={formValues.crontab} onChange={handleCron} />
                    
                    <small id="cronHelp" class="form-text text-muted">
                    <div class="alert alert-primary" role="alert">
                        Próxima ejecución: <b>{nextDate?nextDate.toString():'Crontab inválido'}</b>
                    </div>
                        <p>
                            Determina la recurrencia con que deseas enviar el correo: segundos, minutos, dias del mes, mes, dia de semana <br />
                            El primer <b>*</b> es opcional, ejemplos:
                        </p>
                        <p>
                            0 15 * * * = Todos los dias a las 3:00 PM.<br />
                            0 0 * * 0 = Todos los domingos a las 12:00 AM. <b>Los dias de la semana son de 0 a 6, empezando domingo</b><br />
                            30 0 */2 * * = Cada 2 horas y 30 segundos, todos los dias. Ej: 12:00:30 AM, 2:00:30 AM, 4:00:30 AM.. etc.  
                        </p>
                    </small>

                </div>
                <div className="form-group">
                    <label htmlFor="endComponent">Finalización de mensaje</label>
                    <input disabled={!formValues.recurrency} type="date" name="end" className="form-control" id="endComponent" placeholder="Ingrese la fecha de finalización"  value={formValues.end} onChange={handleFormValues} />
                </div>
            </div>
            <div className="form-group">
                { loading &&
                    <div className={'alert alert-'+typeAlert} role="alert">
                        {alertText}
                    </div>
                }       
            </div>
            <button className="btn btn-success" type="submit">{formValues.recurrency ? 'Programar envios': 'Enviar'}</button>
        </form>
    );
}

export default MailForm;