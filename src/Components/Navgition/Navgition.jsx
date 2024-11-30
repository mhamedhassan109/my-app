import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "./Navgition.css";
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
function Navgition() {
    return (
        <>
            <Navbar expand="lg" className="nav" id="nav" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">


                            <Link className='active' to="/home">Home</Link>

                            <NavDropdown title="pages" id="basic-nav-dropdown">
                                <Link to="/about us">about us</Link>
                                <Link to="/our team">our team</Link>
                                <Link to="/error 404">error 404</Link>
                                <Link to="/login / resigter">login / resigter</Link>
                            </NavDropdown>

                            <NavDropdown title="service" id="basic-nav-dropdown">
                                <Link to="/service">service</Link>
                                <Link to="/service detail">service detail</Link>
                            </NavDropdown>

                            <NavDropdown title="blog" id="basic-nav-dropdown">
                                <Link to="/blog">blog</Link>
                            </NavDropdown>

                            <Link to="/Contact">contact us</Link>

                            <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>

                            <Nav.Link href="#">
                                <div className="number">
                                    <FontAwesomeIcon icon={faPhone} className='phone' />
                                    (+01)999 888 777
                                </div>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <button>contact us <span><FontAwesomeIcon icon={faAngleRight} /></span></button>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navgition;