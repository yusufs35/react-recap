import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { up } from "../../store/slices/cart-slice";

const ProductItem = ({ item }) => {
	const dispatch = useDispatch();

	const { title, stock, price, images, availabilityStatus } = item;
	return (
		<Card className="h-100">
			<div style={{ height: "250px" }}>
				<Card.Img
					src={images[0]}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>

			<Card.Body className="d-flex flex-column justify-content-between">
				<h4>{title}</h4>

				<Button
					variant="warning"
					className="w-100 mt-3"
					disabled={stock <= 0}
					onClick={() => dispatch(up(item))}
				>
					Add to cart
				</Button>

				<Badge className=" position-absolute top-0 start-0 m-3">
					{availabilityStatus}
				</Badge>

				<Badge
					bg="warning"
					className="position-absolute top-0 end-0 m-3 text-dark fs-6"
				>
					${price}
				</Badge>
			</Card.Body>
		</Card>
	);
};

export default ProductItem;
