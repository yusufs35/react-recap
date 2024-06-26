import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Recap2Child from "../components/recap2-child";

const Recap2Page = () => {
	const [message, setMessage] = useState("");

	return (
		<Container className="my-3">
			<Button onClick={() => setMessage("Hello")}>Click Me</Button>
			<Recap2Child message={message} />
		</Container>
	);
};

export default Recap2Page;
