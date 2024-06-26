const API_URL = "https://dummyjson.com/products";

export const getAllProducts = async () => {
	const res = await fetch(API_URL);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return data;
};
