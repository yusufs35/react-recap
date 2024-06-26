import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Recap3Child from "../components/recap3-child";

const Recap3Page = () => {
	const [message, setMessage] = useState("");

	return (
		<Container className="my-3">
			<h1>{message}</h1>
			<Recap3Child setMessage={setMessage} />
		</Container>
	);
};

export default Recap3Page;
