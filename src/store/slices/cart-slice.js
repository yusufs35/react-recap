import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		up: (state, action) => {
			// Sepette eklenmek istenilen urunun zaten var olup olmadigi tespit ediliyor
			const cartItem = state.items.find(
				(item) => item.product.id === action.payload.id
			);

			if (cartItem) {
				// Urun varsa sadece miktari artiriliyor
				cartItem.amount++;
			} else {
				// Urun yoksa sifirdan ekleniyor
				state.items.push({ amount: 1, product: action.payload });
			}
		},

		down: (state, action) => {
			const cartItemIndex = state.items.findIndex(
				(item) => item.product.id === action.payload
			);

			if (cartItemIndex < 0) return;

			const cartItem = state.items[cartItemIndex];

			if (cartItem.amount > 1) {
				cartItem.amount--;
			} else {
				state.items.splice(cartItemIndex, 1);
			}
		},
		
		removeAll: (state) => {
			state.items = [];
		},
	},
});

export const { up } = cartSlice.actions;
export default cartSlice.reducer;
