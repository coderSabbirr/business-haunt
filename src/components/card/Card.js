import React from 'react';
import './Card.css'
const Card = (props) => {
    const{name,image}=props.detail;
    return (
        <div className="company">
            <li><img src={image} alt="" /><span className="name">{name}</span></li>
        </div>
    );
};

export default Card;