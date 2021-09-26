import React, { useEffect, useState } from 'react';
import './Shop.css'
import Proudct from '../Product/./Product'
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([]);
    

    useEffect(() => {
        fetch('./company.JSON')
       .then(res => res.json())
       .then(data => setProducts(data))
    },[])
    const handlarAddToCart =(product) => {
        const newCart =[...cart,product];
        setCart(newCart);
        
    }
    return (
        <div className="cart">
          <div className="row all-cart">
              {
                 products.map(product => <Proudct
                    key={product.key}
                     proudct={product}
                     handlaraddtocart={handlarAddToCart}
                     ></Proudct>) 
              }
           </div>
           <div className="cart-container">
           <Cart cart={cart} ></Cart>
           
           </div>
        </div>
    );
};

export default Shop;



