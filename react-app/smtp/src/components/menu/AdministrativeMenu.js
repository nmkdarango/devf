import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function AdministrativeMenu(){
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('app_superuser')==='true'){
            setAdmin(true);
        }
    }, []);
    return (
        <>
            {
                admin &&
                <li className="nav-item"><NavLink exact className="nav-link" to="/users">Usuarios</NavLink></li>
            }
        </>
    );
}
export default AdministrativeMenu;