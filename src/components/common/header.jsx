import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./cart";

const Header = () => {
	return (
		<Navbar expand="lg" className="bg-info">
			<Container>
				<Navbar.Brand to="/" as={Link}>
					RECAP
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link  to="/" as={Link}>Home</Nav.Link>
						<Nav.Link  to="/page7" as={Link}>Shop</Nav.Link>
						<NavDropdown
							title="Other Recap Pages"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item  to="/page1" as={Link}>
								Page1
							</NavDropdown.Item>
                            <NavDropdown.Item  to="/page2" as={Link}>
								Page2
							</NavDropdown.Item>
                            <NavDropdown.Item  to="/page3" as={Link}>
								Page3
							</NavDropdown.Item>
                            <NavDropdown.Item  to="/page4" as={Link}>
								Page4
							</NavDropdown.Item>
                            <NavDropdown.Item  to="/page5" as={Link}>
								Page5
							</NavDropdown.Item>
                            <NavDropdown.Item  to="/page6" as={Link}>
								Page6
							</NavDropdown.Item>

							
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>

                <Cart/>
			</Container>
		</Navbar>
	);
};

export default Header;
