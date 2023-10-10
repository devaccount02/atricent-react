import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container,
    Col,
    Row
} from 'reactstrap';
import notificationImg from '../../../assets/images/notification.png'
import atricentlogo from '../../../assets/images/Layer 1.png'


const NavTop = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.outerWidth > 768);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Function to update isWideScreen state based on window width
        const handleWindowResize = () => {
            setIsWideScreen(window.outerWidth > 768);
        };

        // Add a listener to handle window resize events
        window.addEventListener('resize', handleWindowResize);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <>
            {isWideScreen ? (
                <Navbar color="light" light expand="md">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col md={4} className="text-center">
                                <Nav className="justify-content-center" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">Discover</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">Wardrobe</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md={4} className="text-center">
                                <NavbarBrand href="/">
                                    <img src={atricentlogo} alt="" style={{ height: '30px', width: '10vw', marginLeft: '15%', marginTop: '1%' }} />
                                </NavbarBrand>
                            </Col>
                            <Col md={4} className="text-center">
                                <Nav className="justify-content-center" navbar>
                                    <NavItem>
                                        <NavLink href="/">Contact</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={notificationImg} alt="" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">Login</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            ) : (
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/" >
                            <div style={{ width: '20vw', position: 'absolute', height: '10vh' }}>
                                <img src={atricentlogo} alt="" />
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} style={{ marginLeft: '75%' }} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Discover</NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Wardrobe</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <img src={notificationImg} alt="" />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            )}
        </>

    );
}

export default NavTop;
