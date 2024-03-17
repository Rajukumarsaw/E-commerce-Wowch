import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";

function FilteredProduct() {
   const items=useSelector((state)=>state.products.productList);
     const {Brand}=useParams();
     const [filterProduct, setFilterProduct]=useState([]);
      useEffect(()=>{
      const selectedProduct = items.filter(
         item => item.brand === Brand
            );
            console.log(selectedProduct);
        setFilterProduct(selectedProduct);
     },[items, Brand]);
     const loadingArrayFeature = new Array(10).fill(null);
  return (
    
    <> 
        <div className="text-center m-5 font-baleny font-bold  text-3xl text-emerald-900 mt-20 mb-10 underline">{Brand}</div>
         <div className="w-full flex items-center  whitespace-nowrap justify-center flex-wrap gap-9 my-10">
         {filterProduct[0]?(
            filterProduct.map((item, index)=>{
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
         ):(loadingArrayFeature.map((item, index) => (
            <ProductCard
               loading={"loading..."}
               key={index}
            />
        )
         )
         )
         }
      </div>
    </>
  )
      }

export default FilteredProduct