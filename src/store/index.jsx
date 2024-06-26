import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import { Provider } from "react-redux";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
