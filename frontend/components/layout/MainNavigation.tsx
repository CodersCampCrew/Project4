import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const { user } = useSelector((state: AnyAction) => state.auth);
  const router = useRouter();
  const logoutHandler = () => {
    userService.logout();
    router.push("/");
  };

  return (
    <Navbar collapseOnSelect bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Project4</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar>
          <Nav className="me-auto"></Nav>
          {!user && (
            <Nav>
              <Link href="/login" passHref>
                <Nav.Link>Zaloguj się</Nav.Link>
              </Link>
            </Nav>
          )}
          {user && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Menu" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="addStudent/part1">Dodaj ucznia</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="calendar">Kalendarz</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Wyloguj się
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          )}
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
