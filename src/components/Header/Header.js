import React from 'react';
import './styles.css';
import logo from '../../img/stackline_logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img style={{height:60}} src={logo} alt="Stackline Logo"  />
        </div>
    );
};

export default Header;
