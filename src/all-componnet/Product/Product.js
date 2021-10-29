import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    const {name,price,stock,img,seller,star}=props.allProperty
    console.log(props.allProperty)

    return (
        <div className="main">
            <div className ="img">
               <img src={img} alt="" />
            </div>
            <div className="sub">
               <h3 className="name">name :-  {name.slice(0,100)}</h3>
               <h4 className="price">price : ${price}</h4>
               <p>by : {seller}</p>
               <p>only {stock} left in stock - order soon</p>
               
              <div className="icon">
                 <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    
                 />
              </div>

               <button onClick={()=> props.handeler(props.allProperty)} className="add-btn">🛒 Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;