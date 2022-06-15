
const cartReducer = (state, action) => {
    switch(action.type){
        case 'add-to-cart': {
            const newProduct = action.payload;
            const existProduct = state.some(product => product.id === newProduct.id);
            return existProduct ? 
                state.map(product => product.id === newProduct.id ? 
                    {...product, quantity: product.quantity+1} 
                    : product)
            : [...state, newProduct] 
        }
        case 'delete-from-cart':
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
}

export default cartReducer;