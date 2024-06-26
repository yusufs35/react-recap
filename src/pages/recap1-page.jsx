import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Recap1Page = () => {
	const [message, setMessage] = useState("");

	return (
		<Container className="my-3">
			<h1>{message}</h1>
			<Button onClick={() => setMessage("Hello")}>Click Me</Button>
		</Container>
	);
};

export default Recap1Page;
