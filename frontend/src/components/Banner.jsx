import bannerImage from "../assets/banner_img.png"
import { Link } from "react-router-dom"
const Banner = () => {
  return (
    <>
    <div >
      <div className="flex flex-col md:flex-row justify-around h-3/5 w-full bg-[#a7c1c2] pb-5">
        <div className=" flex flex-col items-center justify-center text-center font-baleny order-2 md:order-1 md:text-2xl">
           <h1 className=" text-cyan-700">GREAT</h1>
           <h1 className=" text-cyan-700">DISCOUNT</h1>
           <h3>Special Offer up to 60% Off</h3>
           <button className=" bg-[#67E6DC] mt-5 rounded-lg p-2 md:text-sm"><Link to="/menu">Shop Now</Link></button>
        </div>
        <div className=" flex items-center justify-center order-1 md:order-2"> 
            <img src= { bannerImage} alt="banner image"/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Banner
