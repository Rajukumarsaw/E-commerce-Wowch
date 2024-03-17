import { TfiList, TfiLayoutPlaceholder } from "react-icons/tfi";
import { useState } from "react";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { HiOutlineUserCircle } from "react-icons/hi";
import { logoutRedux } from "../store/userslice";

function Comp() {
  const cartItems = useSelector((state) => state.products.cartItem);
  const userState= useSelector((state) => state.user.userInfo);

	const CartLength = cartItems.reduce((acc, item) => acc + item.qty, 0);
   
   const [userMenu, setuserMenu]=useState(false);
  const [menu, setmenu]=useState(false);

  const handleToggleMenu=()=>{
       setmenu((prevVal)=>!prevVal);
  }
  const handleToggleUserMenu=()=>{
    setuserMenu((prevVal)=>!prevVal);
}
 const dispatch= useDispatch();
const handleLogout = () => {
  dispatch(logoutRedux());
  // localStorage.removeItem("account");
  toast("Logout Successfull");
};
  return (
    <>
       <header className="relative flex  w-full   bg-blue-100 shadow-xl h-20">
       <Link to="/" className="hidden md:block">
        <img src={logo} alt="LOGO" className="LOGO w-20 h-20" />
      </Link>
      <div className="h-80 w-80 ml-4 mt-6 md:hidden" onClick={handleToggleMenu}>
      <TfiList />
      </div>
      <nav className="navbar flex  w-2/3 justify-end absolute top-1 right-1 mt-5 mr-4  text-2xl leading-6 text-emerald-900" >
        <div className="hidden md:flex  ">
        <Link to="/" className="px-5">Home</Link>
        <Link to="/menu" className="px-5">Menu</Link>
        <div className="px-5">About</div>
        <div className="px-5">Contact</div>
        </div>
        <div className=" relative flex justify-center items-center gap-8">
         <Link to="/cart">
           <BsCartFill className="text-xl md:text-2xl text-slate-600 " />
							<div className="absolute w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full p-0 -top-1 text-xs">
								{CartLength}
							</div></Link>

              <div>
						<div
							className="text-slate-600 cursor-pointer"
							onClick={handleToggleUserMenu}
						>
							{userState && userState.email && userState.image ? (
								<img
									src={userState?.image}
									alt="userimage"
									className="w-6 h-6 rounded-full"
								/>
							) : (
								<HiOutlineUserCircle className="text-3xl md:text-4xl " />
							)}
						</div>
						{userMenu && (
							<div className="absolute right-3 bg-white shadow drop-shadow-md py-3 px-2 top-[110%] rounded-md text-center">
								<div className="flex flex-col">

									{userState.email ? (
										<p
											className="whitespace-nowrap cursor-pointer hover:text-orange-500"
											onClick={handleLogout}
										>
											Logout
										</p>
									) : (
										<Link
											to={"/login"}
											className="whitespace-nowrap cursor-pointer hover:text-orange-500"
										>
											Login
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
        
      </nav>
      <div
					className={`${
						menu
							? "left-0 transition-all duration-500 "
							: "-left-[100%] transition-all duration-600"
					}  absolute top-[115%]  h-[300px] w-[200px] bg-slate-200 z-[50] rounded-lg `}
				>
         <div onClick={handleToggleMenu} className="absolute top-1 right-2 bg-red-600 rounded-xl h-6 w-6 flex items-center justify-center "> 
         <TfiLayoutPlaceholder className="h-11/12 w-11/12 rounded-xl " />
         </div>
         <div className="flex flex-col items-center  mt-12 text-2xl leading-6 text-emerald-900">
          <Link to={'/'} className="m-2">Home</Link>
          <Link to={'/menu'} className="m-2">Menu</Link>
          <div className="m-2">About</div>
          <div className="m-2">Contact</div>
         </div>
       </div>
      </header>
    </>
  );
}

export default Comp;

