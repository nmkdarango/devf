import React, {useState} from 'react';
import {Modal}  from 'react-bootstrap';
import LoginForm from './LoginForm';
import {NavLink} from 'react-router-dom';

function AccountAccess({changeLogin}){

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        if(localStorage.getItem('app_login')==='true'){
            changeLogin(true);
        } 
    }
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    }

    //Segundo parametro opcional, el segundo parametro contiene las variables que estaré escuchando


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onHandleCloseModal={handleClose}/>
                </Modal.Body>
            </Modal>

            <li className="nav-item">
                <a href="#" className="nav-link" onClick={handleShow}>Iniciar sesión</a>
            </li>
            <li className="nav-item">
                <NavLink exact to="/register" className="nav-link" >Registrarme</NavLink>
            </li>
        </>
    );
    

}
export default AccountAccess;