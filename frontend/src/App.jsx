
import './App.css'

import Header from './components/Header'
import { Footer } from './components/Footer'
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAllProducts } from './store/productSlice';
import { setUserInfo } from "./store/userslice";
import { Toaster } from 'react-hot-toast';
function App() {
  const dispatch=useDispatch();
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("account"));
  console.log("user",dataFromLocalStorage);
  useEffect(() => {
		if (dataFromLocalStorage) {
			dispatch(setUserInfo(dataFromLocalStorage));
		}
	}, [dataFromLocalStorage, dispatch]);
  useEffect(()=>{
      axios.get(import.meta.env.VITE_APP_SERVER_DOMAIN +'/api/products/getAllProducts')
           .then((response)=>{dispatch(setAllProducts(response.data))})
           .catch((error)=>{console.log(error)});
  })
  return (
    <>
    <Header/> 
    <Outlet/>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
