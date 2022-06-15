import React, { useContext } from 'react'
import StoreContext from '../../contexts/StoreContext';
import './product.css';

const Product = ({product}) => {

  const {dispatch} = useContext(StoreContext);

  return (
    <div className="product">
        <div className="product-image">
            <img src={product.img} alt="" />
        </div>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <a 
          href="#" 
          className="btn"
          onClick = {() => dispatch({type: 'add-to-cart', payload: {...product, quantity: 1}})}
        >Add to cart</a>
        {product.sale && <div className="product-sale">sale!</div> }
    </div>
  )
}

export default Product