import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,stock,img,seller}=props.allProperty

    return (
        <div className="main">
            <div className ="img">
               <img src={img} alt="" />
            </div>
            <div className="sub">
               <h3 className="name">name :-  {name.slice(0,36)}</h3>
               <h4 className="price">price : ${price}</h4>
               <p>by : {seller}</p>
               <p>only {stock} left in stock - order soon</p>

               <button onClick={()=> props.handeler(props.allProperty)} className="add-btn">🛒 Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;