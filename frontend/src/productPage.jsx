
import ProductCard from "./components/productCard"; // Correcting the import statement
// import productImg from "./assets/Orient.png";
import { useSelector } from "react-redux";
const ProductPage = () => {
  const productData = useSelector((state) => state.products.productList);
  const loadingArray= new Array(10).fill(null);
  return (
    <> 
    <div className="w-full flex items-center  whitespace-nowrap justify-center flex-wrap gap-9 my-10">
				{ 
				productData[0]?(
					productData.map((item, index) => {
							return (
								<ProductCard
									key={index}
									brand={item.brand}
                  model={item.model}
									image={item.image}
									price={item.price}
									_id={item._id}
								/>
							);
					})
				):(loadingArray.map((item, index)=>(
					<ProductCard key={index} loading={"loading..."} item/>
				)))
				}
      </div>
    </>
  );
}
export default ProductPage;

