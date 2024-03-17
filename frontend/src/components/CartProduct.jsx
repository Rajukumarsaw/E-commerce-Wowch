import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {
  removeCartItem,
  increaseItemQnty,
  decreaseItemQnty
} from '../store/productSlice'
const CartProduct = ({item}) => {
    const dispatch=useDispatch();

   
  return (

    <>
      <div className="flex relative w-full h-52 bg-teal-200  rounded-xl">
        <div className="m-4 md:6 rounded-xl">
            <img src={item.image} alt="product image" className=" h-36" /></div>
        <div>
            <div>
             <div  className="flex gap-x-1 font-baleny font-bold text-xl py-5">
             <div> {item.brand}</div>
             <div>{item.model}</div>
             </div>
             <div className="font-semibold py-3">₹{item.price}</div>
             </div>
             <div className="flex gap-x-2 items-center  py-3">
                <button className=" flex justify-center items-center rounded-full h-7 w-7 bg-slate-300" onClick={()=>{dispatch(decreaseItemQnty(item._id))}}>-</button>
                <div>{item.qty}</div>
                <button className=" rounded-full h-7 w-7 bg-slate-300" onClick={()=>{dispatch(increaseItemQnty(item._id))}}>+</button>
            </div>
            </div>
            <button className="absolute top-2 right-2" onClick={()=>{dispatch(removeCartItem(item._id))}}><MdDelete /></button>
            <div className="absolute bottom-2 right-2">Total:₹{item.total} </div>
      </div>
    </>
  )
}
CartProduct.propTypes = {
  item: PropTypes.string.isRequired, 
};
export default CartProduct
