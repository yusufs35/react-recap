import { store } from "../store";

export const getTotalPrice = () => {
	const items = store.getState().cart.items;
	const totalPrice = items.reduce(
		(total, item) => total + item.amount * item.product.price,
		0
	);

	return totalPrice;
};

export const getTotalAmount = () => {
	const items = store.getState().cart.items;
	const totalAmount = items.reduce((total, item) => total + item.amount, 0);

	return totalAmount;
};
