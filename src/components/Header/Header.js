import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
        
            <div className="logo"><img  src={logo} alt=""/></div>
            <div className="header-iteam"><span className="title-name">Top companies in <span className="bng">Bnagladesh</span></span>
            <h4>Total Revenue Per Year:<span className="revenue"> 292.905 billion</span></h4>
            </div>
        </div>
    );
};

export default Header;