import {createContext, useReducer, useState} from 'react'
import cartReducer from '../cartReducer';
import products from '../variables/products';

const StoreContext = createContext();


const StoreProvider = ({children}) => {

    const [listProducts, setListProducts] = useState(products);
    const [cart, dispatch] = useReducer(cartReducer, []);
    const [showCart, setShowCart] = useState(false);


    return (
        <StoreContext.Provider value = {{
            listProducts,
            cart,
            dispatch,
            showCart,
            setShowCart
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}
export default StoreContext;