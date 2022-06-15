import React, { useContext } from 'react'
import StoreContext from '../../contexts/StoreContext';
import {RiDeleteBin5Line} from 'react-icons/ri';
import './Cart.css';

const Cart = () => {

    const {cart, showCart, setShowCart, dispatch} = useContext(StoreContext);

    return (
        <div className={`cart ${showCart ? 'active' : ''}`}>

            <div className="title">
                <h2>Cart</h2>
                <span onClick={() => setShowCart(false)}>X</span>
            </div>

            {cart.length == 0 && 
                <p>No products in the cart</p>
            }

            {cart.map(product => (
                <div className="product-cart">
                    <div className="product-image-cart">
                            <img src={product.img} alt="" />
                    </div>
                    <div className="product-details">
                        <p>{product.name}</p>
                        <h3>$ {product.price} .00</h3>
                        <span>x {product.quantity}</span>
                    </div>
                    <div>
                        <RiDeleteBin5Line 
                            className='icon-delete-cart'
                            onClick={() => dispatch({type: 'delete-from-cart', payload: product.id})}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart