import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function LoginMenu({name, closeSession}){


    const handleCloseSession = (event) => {
        closeSession(event);
    }

    return (
        <>
            <li className="nav-item"><NavLink exact className="nav-link" to="/smtps">Mis smtps</NavLink></li>
            <li className="nav-item"><a href="#" onClick={handleCloseSession} className="nav-link">{name} (Cerrar sesión)</a></li>
        </>
    );
}
export default LoginMenu;