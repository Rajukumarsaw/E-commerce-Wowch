import CartProduct from "../components/cartProduct";
import { useSelector } from "react-redux";
import emptyCart from "../assets/empty.gif";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const cartitems = useSelector((state) => state.products.cartItem);
    const userState = useSelector((state) => state.user.userInfo);

    //total quantity
    const totalQuantity = cartitems.reduce(
		(acc, product) => acc + parseInt(product.qty),
		0
	);

	//total price
	const totalPrice = cartitems.reduce(
		(acc, product) => acc + parseInt(product.total),
		0
	);
     
    const stripeApiKey = import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY;
    const handlePaymentButton = async () => {
		const stripePromise = await loadStripe(stripeApiKey);
        console.log("cartItem",cartitems)
		const fetchData = await fetch(
			import.meta.env.VITE_APP_SERVER_DOMAIN + '/api/payment/checkout',
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
                
				body: JSON.stringify(cartitems),
			}
		);
        if (fetchData.statusCode === 500) return;

		const responseData = await fetchData.json();

		toast("Redirecting to payment gateway ...");
		stripePromise.redirectToCheckout({ sessionId: responseData });
	};

    return (
        <>
        {cartitems[0]? (
         <div className=" min-h-[500px] top-8">
            <h2 className="text-2xl font-bold text-slate-700  ml-8">Your Cart Item</h2>
            <div className="w-full flex flex-col md:flex-row md:gap-x-2 lg:gap-x-10 md:gap-y-0  gap-y-10 mx-auto top-4 relative">
                <div className="w-full  space-y-3 ">
                    {cartitems.map((item, index) => (
                        <CartProduct key={index} item={item} />
                    ))}
                </div>
                <div className=" md:max-w-md w-full flex flex-col gap-y-2 mx-auto items-center">
							<h1 className=" w-full bg-blue-700 text-white p-2 rounded-md text-center">
								Summary
							</h1>
							<div className="w-full  flex justify-between items-center">
								<p>Total Qty:</p>
								<span className="font-semibold w-32">
									{totalQuantity}
								</span>
							</div>
							<div className="w-full flex justify-between items-center">
								<p>Total Price:</p>
								<p className="w-32 font-semibold">
									<span className="text-red-600">₹</span>
									{totalPrice}
								</p>
							</div>
							{userState.email ? (
								<button
									type="button"
									className="p-2 text-white bg-red-600 w-full rounded-md hover:bg-red-700"
									onClick={handlePaymentButton}
								>
									Payment
								</button>
							) : (
								<div className="bg-blue-100 w-full text-center p-2 rounded-md">
									<p className="font-thin italic text-red-500">
										To make payment you must login
									</p>
								</div>
							)}
                            <div className=" bg-zinc-300 rounded-md p-1 text-orange-800">Demo Card info-4000003560000008</div>
                        </div>
                </div>
            </div>
             ) : (
                <div className="flex items-center justify-center">
                    <img src={emptyCart} alt="Empty Cart" />
                </div>
         )}
        </>
    );
};

export default Cart;


