import React from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const RootLayout = () => {
	return (
		<div className=" vh-100 d-flex flex-column justify-content-between">
			<Header />
			<Container className=" flex-grow-1">
				<Outlet />
			</Container>

			<Footer />
		</div>
	);
};

export default RootLayout;
