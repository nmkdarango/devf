import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL, TOKEN_PREFIX} from '../../../config';
import { FaTrash, FaPlus, FaEnvelope } from "react-icons/fa";
import axios from 'axios';
import ModalSmtp from '../../modals/ModalSmtp';
import ModalMail from '../../modals/ModalMail';


function SingleUserSmtps(){
    const { userId } = useParams();
    const [smtpId, setSmtpId] = useState();
    const [showModalSmtp, setShowModalSmtp] = useState(false);
    const [showModalMail, setShowModalMail] = useState(false);
    const [ tableData, setTableData ] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleCloseSmtp = ()=>{
        setShowModalSmtp(false);
    }
    const handlePopupSmtp = ()=>{
        setShowModalSmtp(true);
    }

    const handleCloseMail = ()=>{
        setShowModalMail(false);
    }
    const handlePopupMail = (event)=>{
        const id =  event.target.getAttribute('data-object-id');
        setSmtpId(id);
        setShowModalMail(true);
    }

    useEffect(()=>{
        
        new Promise((resolve, reject)=>{
            if(userId){
                axios.get(API_URL+"smtp/getAllByUser/"+userId,{
                    headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
                })
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                });
            }else{
                axios.get(API_URL+"smtp/getAllCurrentUser",{
                    headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
                })
                .then(result=>{
                    console.log(result);
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                });
            }
            
        })
        .then(result=>{
            setTableData(result.data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
        });

    },[]);
    const handleRemoveRow = (event) =>{

        const index =  event.target.getAttribute('data-index');
        const idSmtp =  event.target.getAttribute('data-object-id');
        axios.delete(API_URL+"smtp/delete/"+idSmtp,{
            headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
        })
        .then(result=>{
            let dataCopy = [...tableData];
            dataCopy.splice(index,1);
            setTableData(dataCopy);
        })
        .catch(error=>{
            console.log(error);
        });
       

    }

    return (
        <>
            {loading &&
                <div className="loading">
                    Cargando los datos...
                </div>    
            }
            <ModalSmtp show={showModalSmtp} handleClose={handleCloseSmtp} userId={userId}/>
            <ModalMail show={showModalMail} handleClose={handleCloseMail} smtpId={smtpId}/>
            <div class="actions">
                <button class="btn btn-info" onClick={handlePopupSmtp}><FaPlus /> Agregar SMTP</button>
            </div>
            <div className="list-table">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Descripción</th>
                            <th scope="col">Host</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableData.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.description?value.description:'(Sin descripción)'}</td>
                                <td>{value.host}</td>
                                <td>{value.user}</td>
                                <td>
                                <button className="btn btn-info" disabled={!value.approved} data-object-id={value._id} onClick={handlePopupMail}><FaEnvelope /> {value.approved ?'Enviar correo':'No válido'}</button>
                                &nbsp;
                                <button className="btn btn-info" data-object-id={value._id} data-index={index} onClick={handleRemoveRow}><FaTrash /> Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SingleUserSmtps;