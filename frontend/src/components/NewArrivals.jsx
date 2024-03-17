import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import ProductCard from "./productCard";


const NewArrivals = () => {
    const [newItem, setNewItem]=useState([]);
     const items=useSelector((state)=>state.products.productList);
           useEffect(()=>{
            const latestData=items.slice(items.lenth-9, 8);
            setNewItem(latestData);
           },[items]);
            
  return (
    < >
       <div className="text-center m-5 font-baleny font-bold  text-3xl text-emerald-900 mt-20 mb-10 underline">New Arrival</div>
      <div className="w-full flex items-center  whitespace-nowrap justify-center flex-wrap gap-9 my-10">
         {
            newItem.map((item, index)=>{
                return(
                    <ProductCard
					key={index}
					brand={item.brand}
                    model={item.model}
                   image={item.image}
					price={item.price}
					_id={item._id}
								/>
                )
            })
         }
      </div>
    </>
  )
}

export default NewArrivals
