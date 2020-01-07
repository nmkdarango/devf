import React from "react";
import {Route} from 'react-router-dom';
import ListUser from './list-users/ListUser';
import RegisterForm from '../account/RegisterForm';
import Home from '../content/home/Home';
import SingleUserSmtps from './single-user-smtps/SingleUserSmtps';

function Content(){
    return (
        <div className="container">
            <Route path="/" exact component={Home} /> 
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/users" exact component={ListUser} />
            <Route path="/users/single/:userId" children={<SingleUserSmtps />} />
            <Route path="/smtps" children={<SingleUserSmtps />} />
        </div>
    );
}
export default Content;
