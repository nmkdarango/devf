import React from 'react';
import './logo.scss';

function Logo(){
    return (
        <div className="logo">
            <span className="inline-block symbol"><span className="colorize"> {'{X}'} </span></span>
            <span className="inline-block description"><b>SMTP</b><br />Control Manager</span>
        </div>
    );
}

export default Logo;