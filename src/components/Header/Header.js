import React from 'react';
import './styles.css';
import logo from '../../img/stackline_logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img className='image' src={logo} alt="Stackline Logo"  />
        </div>
    );
};

export default Header;
