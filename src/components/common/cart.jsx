import React from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTotalAmount, getTotalPrice } from "../../helpers/cart";
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);

	const totalPrice = getTotalPrice();
	const totalAmount = getTotalAmount();

	return (
		<Dropdown align="end">
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				<div className=" d-inline-flex align-items-center gap-2">
					<Badge bg="warning text-dark">
						{totalAmount}
					</Badge>
					<FaShoppingBasket className="fs-4" />
					<span>${totalPrice.toFixed(2)}</span>
				</div>
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{cartItems.map((item) => {
					const { id, images, title, price } = item.product;

					return (
						<Dropdown.Item key={id}>
							<div className="d-flex align-items-center gap-3">
								<div style={{ width: "50px", height: "50px" }}>
									<img
										src={images[0]}
										className="img-fluid"
										alt={title}
									/>
								</div>
								<div>
									<div>{title}</div>
									{item.amount} - ${price}

								</div>
							</div>
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Cart;
