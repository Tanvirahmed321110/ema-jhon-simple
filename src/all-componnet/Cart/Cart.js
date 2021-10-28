import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const {cart}=props
    const total=cart.reduce((pre,curr)=>pre+curr.price,0)
    const tax=1
    const totalTax=(total/100)*3
    const carry=10
    const allTotal=tax+total+totalTax+carry

    // total.toFixed(2)
    return (
        <div>
            <div className="summery">
                 <div className="head">
                    <h2>Order Summary <FontAwesomeIcon icon={faStore}/></h2>
                    <big>Total Ordered  : {cart.length}</big>
                 </div>
                <div className="p">
                  <p>Custom Tax : <span style={{marginLeft:'20%'}}>${tax}</span></p>  
                  <p>Total Tax :  <span style={{marginLeft:'28%'}}>${totalTax.toFixed(2)}</span></p>
                  <p>Carry Cost :<span style={{marginLeft:'25%'}}>${carry}</span></p>
                  <p>Total Price: <span style={{marginLeft:'23%'}}>${total.toFixed(2)}</span></p>
                  <hr />
                </div> 
                <h3 style={{color:'red',marginTop:'3px'}}>Order Total : ${allTotal.toFixed(2)}</h3>
                <button className="add-btn" style={{width:'100%'}}>Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart;