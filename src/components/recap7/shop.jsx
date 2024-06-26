import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { Col, Row } from "react-bootstrap";
import ProductItem from "./product-item";

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const loadProducts = async () => {
			const res = await getAllProducts();
			setProducts(res.products);
		};

		loadProducts();
	}, []);

	return (
		<Row xs={1} sm={2} lg={3} xl={4} className="g-5">
			{products.map((item) => (
				<Col key={item.id}>
					<ProductItem item={item} />
				</Col>
			))}
		</Row>
	);
};

export default Shop;
