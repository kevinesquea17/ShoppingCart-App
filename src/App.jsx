import React from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import { StoreProvider } from './contexts/StoreContext'

const App = () => {

  return (
    <>
      <StoreProvider>
        <Header/>
        <ProductList/>
        <Cart/>
      </StoreProvider>
    </>
  )
}

export default App