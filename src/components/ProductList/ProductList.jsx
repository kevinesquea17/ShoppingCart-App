import React, { useContext } from 'react'

import StoreContext from '../../contexts/StoreContext';
import Product from '../Product/Product';
import './productList.css';

const ProductList = () => {

  const {listProducts} = useContext(StoreContext);

  return (
    <section className='products container'>
        <div className="heading">
            <div className="heading__left">
                <h4>New Arrival</h4>
                <h2>Featured Products</h2>
            </div>
            <div className="heading__right">
                <a href="" className="btn btn-primary">see all products</a>
            </div>
        </div>

        <div className="product-list">
          {listProducts.map(product => (
            <Product
              key={product.id}
              product= {product}
            />
          ))}
        </div>
    </section>
  )
}

export default ProductList