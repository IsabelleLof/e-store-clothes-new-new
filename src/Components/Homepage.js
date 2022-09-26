import fredrik from './assets/fredrik.jpg';
import './Homepage.css';
import Product from './Product';
import axios from 'axios';
import React, { useState } from 'react';

export default function Homepage (props) {

  const [products, setProducts] = React.useState([]);



  React.useEffect(() => {
    fetchProducts()
  }, []);

  React.useEffect(() => {
    console.log('We have a full list of products')
}, [products]);

  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      setProducts(response.data)
    })
  }


    return (
        <div className='grid-container'>
          <div>
          <a href="illustration">
          <img className="fredrik" src={fredrik} alt='' /></a>
          </div>
            <div className='product-container'>
              {products.
              filter((product) => {
                return props.productSearchFilter !== '' ? 
                product.title.toLowerCase().includes(props.productSearchFilter.toLowerCase()) ? product : null
                : product
              })
              .map((productObject) => 
              <Product 
              key={productObject.id} 
              product={productObject} />)}  
            </div>

        </div>
    )
}