import { useState, useTransition, useEffect } from 'react';
import './Product.css';
import { products } from './Homepage';

export default function Product (props) {
    console.log(props)
    //let like = 'unliked';
    const [like, setLike] = useState('♡');

    //const [addNewFavoriteProduct, setAddNewFavoriteProduct] = useState('products');

    const newFavoriteProducts = props.product.id;

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(newFavoriteProducts));
    }, [newFavoriteProducts]);
    //hook
    //console.log(like);

    const handleClick = (e) => {



        //like = 'liked';
        //console.log(like);
        setLike('🤍');
        //console.log(setLike);

    }

    const addNewFavoriteProduct = newFavoriteProducts;
    console.log('product value',addNewFavoriteProduct);




    return (
        <div className='product'>
            <img className="product-image" src={props.product.image} alt={props.product.title} />
            <h2 className="product-title">{props.product.title}</h2>
            <p className="product-category">{props.product.category}</p>
            <p className="product-price">{props.product.price} €</p>
            <button className='button-like' onClick={event => handleClick(event, 0)}>{ like }</button>
        </div>
    )
}