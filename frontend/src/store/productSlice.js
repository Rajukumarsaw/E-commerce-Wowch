import {createSlice} from '@reduxjs/toolkit'

const initialState={
    productList: [],
	cartItem: [],
};
export const productSlice=createSlice(
    {
        name:'product',
        initialState,
        reducers:{
            setAllProducts:(state, action)=>{
                state.productList=[...action.payload];
            },
            addCartItem:(state, action)=>{
                const newItem={
                    ...action.payload,
                    qty:1,
                    total:action.payload.price
                };
                const existingIndex=state.cartItem.findIndex(
                (item)=>item._id==newItem._id
                );
                if(existingIndex===-1){
                    state.cartItem.push(newItem);
                }
                else{
                    state.cartItem[existingIndex].qty+=1;
                    state.cartItem[existingIndex].total= 
                    state.cartItem[existingIndex].qty*state.cartItem[existingIndex].price;
                    
                }
            },
            removeCartItem:(state, action)=>{
                  state.cartItem=state.cartItem.filter((item)=>item._id!==action.payload);
            },
            increaseItemQnty:(state, action)=>{
                  const index=state.cartItem.findIndex((item)=>item._id===action.payload);
                  state.cartItem[index].qty+=1;
                  state.cartItem[index].total=
                   state.cartItem[index].qty*state.cartItem[index].price;
            },
            decreaseItemQnty:(state, action)=>{
                const index=state.cartItem.findIndex((item)=>item._id==action.payload);
                if(state.cartItem[index].qty>1){
                    state.cartItem[index].qty-=1;
                    state.cartItem[index].total= 
                    state.cartItem[index].qty*state.cartItem[index].price;
                    

                }
                else{
                    state.cartItem.splice(index,1);
                }


          }

        }
    }
);
export const {
	setAllProducts,
	addCartItem,
	removeCartItem,
	increaseItemQnty,
	decreaseItemQnty,
} = productSlice.actions;
export default productSlice.reducer;