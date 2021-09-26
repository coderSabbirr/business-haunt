
import Card from "../card/Card";
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;
    
    let total = 0;
    
    for (const product of cart) {
        
        total= total + product.revenue

    }
    return (
        <div className="total-cart">
            <h5>Company Added:{props.cart.length} </h5>
           <h5>Total Revenue: ${total}</h5>
           {
               cart.map(detail =><Card detail={detail} ></Card>)
           }
        </div>
    );
};

export default Cart;