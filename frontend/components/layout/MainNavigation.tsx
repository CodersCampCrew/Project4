import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

const MainNavigation = () => {
	const { logged } = useSelector((state: AnyAction) => state.auth);

	return (
		<Navbar collapseOnSelect bg="info" variant="dark">
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand>Project4</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar>
					<Nav className="me-auto"></Nav>
					{!logged && (
						<Nav>
              <Link href='/login' passHref><Nav.Link>Zaloguj się</Nav.Link></Link>
							
						</Nav>
					)}
				</Navbar>
			</Container>
		</Navbar>
	);
};

export default MainNavigation;
