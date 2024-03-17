import { Link } from "react-router-dom"
const productCard = ({loading, brand ,model , price, image,_id}) => {
  return (
    <>
       <div className="flex flex-col items-center text-center h-[300px] w-[200px] bg-slate-300 p-2  rounded-lg font-baleny text-emerald-800">
        { image?(
          <>
        <Link to={`/products/${_id}`}>
            <img src={image} alt="product image" className=" h-52" />
        </Link>
        <div>
            <div>{brand}</div>
            <div className=" font-semibold">{model}</div>
            <div>₹{price}</div>
        </div>
        </>):(<div className="min-h-[200px] min-w-32 flex justify-center items-center animate-pulse bg-gray-200 video">
					<p>{loading}</p>
				</div>)
       }
       </div>
    </>
  )
}

export default productCard
