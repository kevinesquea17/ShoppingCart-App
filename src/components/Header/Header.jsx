import React, { useContext, useState } from 'react'
import {FiSearch} from 'react-icons/fi';
import {BsCart3} from 'react-icons/bs';
import {HiMenu} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import './header.css';
import StoreContext from '../../contexts/StoreContext';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const {cart, setShowCart} = useContext(StoreContext);
    const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const quantity = cart.reduce((quantity, product) => quantity + product.quantity, 0);
    
    return (
        <header>
            <div className="container container__header">
                <div className="header__left">
                    <h1 className='logo'>Urban<span>isty</span></h1>
                    <nav className={`navegation ${showMenu ? 'active' : ''}`}>
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">About</a>
                        <a href="#">News</a>
                        <a href="#">Pages</a>
                    </nav>
                    <div className="menu-mobile">
                        {!showMenu ? 
                            <HiMenu className='icon-menu' onClick={() => setShowMenu(true)}/>
                            : <AiOutlineClose  className='icon-menu-close' onClick={() => setShowMenu(false)}/>
                        }   
                    </div>
                </div>
                <div className="header__right">
                    <div className="cta">
                        <div className='icon-search'>
                            <FiSearch/>
                        </div>
                        <a href="#" className='btn btn-primary'>login</a>
                        <a href="#" className='btn btn-primary' onClick={() => setShowCart(true)}>
                            ${total}
                            <BsCart3 className='icon'/>
                            <span className="cart-elements">{quantity}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header