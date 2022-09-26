import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar (props) {

  const [productSearchValue, setProductSearchValue] = React.useState('');

  const handleProductSearchInput = (event) => {
    const currentSearchInputValue = event.target.value;
    setProductSearchValue(currentSearchInputValue);
    console.log('search input value', event.target.value);
  }

  const submitProductSearch = () => {
    props.productSearchHandler(productSearchValue)
  }
   
    return(
        <div>
            <div className='navbar'>   
                  <ul className='navbar-links-container'>
                    <li>Customerservice</li>
                    <Link to='/newsletter' >
                    <li>Newsletter</li></Link>
                    <Link to='/storelocater' >
                    <li>Find a Store</li></Link>
                  </ul>
                  <Link to='/' ><button className='home-button'></button></Link>
                  <ul className='search-favo-cart-container'>
                    <input onChange={handleProductSearchInput} value={productSearchValue} className='search-input' type='text' placeholder='Search for a product' />
                    <button onClick={submitProductSearch}></button>
                    <Link to='/favourites' >
                    <li>Favorites</li></Link>
                    <li className='margin-shoppingbag'>Shoppingbag</li>
                  </ul>
            </div>
            <div>
              <ul className='topnav'>
                <Link to='/woman' ><li>Woman</li></Link>
                <li>Men</li>
                <li>Children</li>
                <li>Sport</li>
                <li>Jewelery</li>
              </ul>
            </div>
            <div className='hamburger-icon'>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
              <ul className='mobile-menu'>
              <Link to='/woman' >
                <li>Woman</li></Link>
                <li>Men</li>
                <li>Children</li>
                <li>Sport</li>
                <li>Jewelery</li>
                <li>Customerservice</li>
                <Link to='/newsletter' >
                <li>Newsletter</li></Link>
                <Link to='/storelocater' >
                <li>Find a Store</li></Link>
              </ul>
            </div>
           </div>     
    );
  }



                    //<li>Men</li>
                    //<li>Women</li>
                    //<li>Kids</li>
                    //<li>Bags</li>