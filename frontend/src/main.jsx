
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home.jsx'
import {store} from './store/store.js'
import { Provider } from "react-redux";
import FilteredProduct from './pages/FilteredProduct.jsx'
import ProductPage from './productPage.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/cart.jsx'
import SignUp from './pages/signup.jsx'
import Login from './pages/login.jsx'
import Success from './pages/success.jsx'
import Cancel from './pages/cancel.jsx'
 const router=createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<App/>}>
             <Route path='' element={<Home/>}/>
             <Route path='/menu/' element={<ProductPage/>}/>
             <Route path='/menu/:Brand' element={<FilteredProduct/>}/>
             <Route path ='/cart' element={<Cart/>}/>
             <Route path='/products/:id' element={<ProductDetails/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/success' element={<Success/>}/>
             <Route path='/cancel' element={<Cancel/>}/>
         </Route>
      )
 )
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <RouterProvider router={router}/>
  </Provider>
)
