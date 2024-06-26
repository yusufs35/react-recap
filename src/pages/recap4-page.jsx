import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

const Recap4Page = () => {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);

	return (
		<Container className="my-3">
			<div className="d-flex align-items-center gap-3">
				<FormControl
					placeholder="Number 1"
					type="number"
					onChange={(e) => setNumber1(e.target.value)}
				/>
				<span className="fw-bold fs-3">+</span>
				<FormControl
					placeholder="Number 2"
					type="number"
					onChange={(e) => setNumber2(e.target.value)}
				/>
			</div>

			<div className="text-center border mt-4 p-4 fs-2">
				{Number(number1) + Number(number2)}
			</div>
		</Container>
	);
};

export default Recap4Page;
