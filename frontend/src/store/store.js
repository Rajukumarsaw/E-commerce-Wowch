import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './productSlice'
import UserReducer from './userslice'
export const store=configureStore({
    reducer: {
		user: UserReducer,
		products: ProductReducer,
	}
}
);