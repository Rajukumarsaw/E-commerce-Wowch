
import { useParams } from "react-router-dom";
import RatingStar from "react-rating-stars-component"
import { useSelector, useDispatch} from "react-redux";
import { addCartItem } from "../store/productSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const ProductDetails = () => {
    const option={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:3.5,
        size:window.innerWidth<600?20:25,
        isHalf:true,
    };
    const {id}=useParams();
    const productsState = useSelector((state) => state.products.productList);
    console.log(id);
    const [Product, setProduct]=useState({});
    useEffect(()=>{
         window.scrollTo(0,0);
    const selectedProduct = productsState.filter(
      (item) => item._id === id
    )[0];
    setProduct(selectedProduct)
  },[productsState, id])

   const dispatch=useDispatch();
  const HandleClickbutton=()=>{
       dispatch(addCartItem(Product));
       toast("Item added");
  } 

  
  return (
    <>
      {Product && (
        <div className="w-full h-full flex flex-wrap bg-[#53E0BC]">
          <div className="bg-gray-400 m-5 md:m-8 rounded-xl">
            <img
              src={Product.image} 
              alt="productImage"
              className="h-72 w-52 md:h-80 md:w-64 m-5"
            />
          </div>
          <div className="p-5 flex flex-col justify-center">
            <div className="flex gap-2 text-3xl">
              <div>{Product.brand}</div>
              <div>{Product.model}</div>
            </div>
            <div>
              <RatingStar {...option} />
            </div>
            <div className="font-bold">description</div>{" "}
            <div>{Product.description}</div>
            <div className="mt-2 font-semibold text-xl">₹{Product.price}</div>
            <button className="h-8 md:h-10 w-9/12 m-6 bg-green-700 rounded-lg" onClick={HandleClickbutton}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
  
}

export default ProductDetails
