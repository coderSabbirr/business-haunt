import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const{name,type,founded,founder,headquarters,revenue,image} = props.proudct;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
       
    <div className="single-product card">
     <div>
      <img className="company-image" src={image}  alt=""></img>
      </div>
       <h5 className="company-name">Company Name: {name}</h5>
       <p>Type: {type}</p>
       <p >Founded: {founded}</p>
       <p >Founder: {founder}</p>
       <p >Headquarters: {headquarters}</p>
       <p >Revenue: {revenue}</p>
       <button  
       onClick={()=> props.handlaraddtocart(props.proudct)}
        class=" btn-custom">{element} Add company</button>
     
    </div>

       
    );
};

export default Product;