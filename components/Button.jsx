import React from 'react';
import './Button.scss';

const Button = ({ children, type, onclick }) => {

    return (
        <button className='default' type={type ? type : ''} onClick={onclick}>{children}</button>
    )
}

export default Button