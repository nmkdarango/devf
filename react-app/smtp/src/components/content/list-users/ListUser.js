import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {API_URL, TOKEN_PREFIX} from '../../../config';
import { FaPlusSquare, FaEye } from "react-icons/fa";
import {Link} from 'react-router-dom';
import ModalSmtp from '../../modals/ModalSmtp';


function ListUser(){
    const [tableData,setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState();

    const handleClose = () => {
        setShow(false);
    } 
    const handlerPopup = (event) =>{
        const id =  event.target.getAttribute('data-object-id');
        setUserId(id);
        setShow(true);
    }

    useEffect(() => {
        axios.get(API_URL+"user/getAll",{
            headers: { Authorization: TOKEN_PREFIX+localStorage.getItem('app_token')}
        })
        .then(result=>{
            setTableData(result.data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
        });

    }, []);
    return (
        <>
            {loading &&
                <div className="loading">
                    Cargando los datos...
                </div>    
            }
            <ModalSmtp show={show} handleClose={handleClose} userId={userId} />

            <div className="list-table">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.username}</td>
                                    <td>
                                        <button className="btn btn-info" data-object-id={value._id} onClick={handlerPopup}><FaPlusSquare/> Agregar SMTP</button>
                                        &nbsp;
                                        <Link className="btn btn-info" to={"/users/single/"+value._id}><FaEye /> Listar SMTP</Link>
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
export default ListUser;