import React from "react";
import { Button } from "react-bootstrap";

const Recap3Child = ({ setMessage }) => {
	return (
		<div>
			<Button onClick={() => setMessage("Hello")}>Click me</Button>
		</div>
	);
};

export default Recap3Child;
