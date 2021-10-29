import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart}from '../../utilities/fakedb'
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard} from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
  const [displayProduct,setDIspayProduct]=useState([])

  

  useEffect(()=>{
      fetch('./products.JSON')
      .then(res=>res.json())
      .then(data=>{setProducts(data)
                   setDIspayProduct(data)
    })
    },[])

  useEffect(()=>{
      const  saveCard=getStoredCart()
      const  store=[]
     if(products.length){
        for(const property in saveCard){
            const addedProduct=products.find(product=>product.key===property)
            console.log(addedProduct)      
            store.push(addedProduct)
        }
        setCart(store)
     }
  },[products])


    const cartHandeler=(producta)=>{
        const newCart=[...cart,producta]
        setCart(newCart)
        console.log(producta.name)
        addToDb(producta.key)
    }
  

    const reloadBtn=()=>{window.location.reload()}



    const element = <FontAwesomeIcon icon={faIdCard} />
    const searchHandeler=(event)=>{
        const searchText=event.target.value
        const matchText=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDIspayProduct(matchText)
        console.log(searchText)
    }


    return (
            <div>
               <div className="search">
                    <input onChange={searchHandeler} type="text" placeholder=" Search Here" />       
                    <span> &nbsp; &nbsp; {element} 🛒<span style={{fontSize:'24px'}}>0</span> </span>  
                </div>

         <div className="container">
            <div className="product">
                <button onClick={()=> reloadBtn()} className='reload-btn' >Reload Here</button>
                {
                        displayProduct.map(product=> <Product 
                        key={product.key}
                        handeler={cartHandeler}
                        allProperty={product}>  
                        </Product>
                       )
                }
            </div>

            <Cart cart={cart}></Cart>

        </div>
       </div>
    );
};

export default Shop;