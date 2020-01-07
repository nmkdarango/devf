import React, {useState, useEffect} from 'react';
import AccountAccess from '../account/AccountAccess';
import {NavLink} from 'react-router-dom';
import AdministrativeMenu from './AdministrativeMenu';
import {Redirect} from 'react-router-dom';
import LoginMenu from './LoginMenu';

function Menu(){

    const [login, setLogin] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [toHome, setToHome] = useState(false);

    const handleCloseSession = (event) => {
        localStorage.clear();
        setToHome(true);
        setLogin(false);
        
        event.preventDefault();
    }

    useEffect(() => {
        if(localStorage.getItem('app_login')==='true'){
            setFirstname(localStorage.getItem('app_firstname'))
            setLogin(true);
            setToHome(false);
        }
    }, [login]);

    return (
        <>
            { toHome ? <Redirect to="/" />:null }
            <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Página de inicio</NavLink>
                </li>
                { 
                    !login &&
                        <AccountAccess changeLogin={setLogin} />
                }
                {
                    login &&
                    <>
                        <AdministrativeMenu />
                        <LoginMenu name={firstname} closeSession={handleCloseSession} />
                    </>
                }
            
            </ul>
        </>
    
    );
}

export default Menu