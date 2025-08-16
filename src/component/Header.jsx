import { Link, NavLink } from "react-router"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { useContext } from "react"
import { BasketContext } from "./App"

function Header() {
    const {setShow, sebet} = useContext(BasketContext)
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/">
                        <img id="logo" src="./assets/img/logo.png" alt="Pizza logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="main">Ana səhifə</NavLink>
                        <NavLink className="nav-link" to="menu">Menyu</NavLink>
                        <NavLink className="nav-link" to="contact">Əlaqə</NavLink>
                    </Nav>
                    <Nav>
                        <Button onClick={() => setShow(true)} className="btn-light p-0 position-relative" size="sm">
                            <BsCart4 size="30" />
                             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {sebet.length}
                             </span>
                        </Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header