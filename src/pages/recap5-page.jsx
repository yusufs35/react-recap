import { Container, FormControl } from "react-bootstrap";
import Recap5Child from "../components/recap5-child";
import { useState } from "react";

const Recap5Page = () => {
	const [text, setText] = useState("");

	return (
		<Container className="my-3">
			<FormControl onChange={(e) => setText(e.target.value)} />
			<Recap5Child text={text} />
		</Container>
	);
};

export default Recap5Page;
