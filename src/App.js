import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Products, Cart, Checkout , Home , Collections } from './components'
import { Header , Footer} from './components'
import { product } from './components/Products/Product/Product'
import { commerce } from './lib/commerce'
import Product from './components/Products/Product/Product'


const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [products, setProducts] = useState([])
  const [collections, setCollections] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }
  const fetchCollections = async () => {
    const { data } = await commerce.categories.list()

    setCollections(data)
  }
console.log(collections);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity , variantData) => {
    const item = await commerce.cart.add(productId, quantity , variantData)

    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId,   quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity })

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId)

    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()

    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      console.log(error)
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
    fetchCollections()  
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
       

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/Collections'>
            <Collections
            collections={collections}
                />
          </Route>


          <Route exact path='/Products'>
          <Header/>
            <Products
         
            
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty 
            />
          </Route>
          
          <Route exact path='/cart'>
          <Header/>
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route path='/checkout' exact>

            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
         
         
            <Route path='/Product/:id' children={<Product />}>
            <Header/>
              <Product products={products}
               onAddToCart={handleAddToCart} 
               
               />
               
            </Route>

         
               
        

          
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
