import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            
            <div className="logo"><img  src={logo} alt=""></img></div>
            <h4 className="header-iteam">Total Revenue Per Year:<span className="revenue"> 292.905 billion</span></h4>
            
        </div>
    );
};

export default Header;