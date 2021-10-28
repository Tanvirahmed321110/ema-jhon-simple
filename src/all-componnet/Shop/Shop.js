import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
  useEffect(()=>{
      fetch('./products.JSON')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])

    const cartHandeler=(producta)=>{
        const newCart=[...cart,producta]
        setCart(newCart)
        console.log(producta.name)
    }
  
    const reloadBtn=()=>{window.location.reload()}
     
    return (
        <div className="container">
            <div className="product">
                <button onClick={()=> reloadBtn()} className='reload-btn' >Reload Here</button>
                {
                    products.map(product=> <Product 
                        key={product.key}
                        handeler={cartHandeler}
                        allProperty={product}>  
                        </Product>
                       )
                }
            </div>

            <Cart cart={cart}></Cart>

        </div>
    );
};

export default Shop;