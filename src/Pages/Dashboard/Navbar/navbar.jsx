import React, { useState, useEffect } from 'react';
import {
    Navbar,
    Container,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import notificationImg from '../../../assets/images/notification.png'
import atricentlogo from '../../../assets/images/Layer 1.png'
import './navbar.css'

const NavTop = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    const navbarStyle = {
      height: isOpen ? '50vh' : '8vh',
      paddingBottom:'40px',
      marginBottom:'2%'
    };
  
      return (
        <div>
          <Navbar color="light" light expand="md" style={navbarStyle}>
            <Container>
              <div style={{display:'flex', justifyContent:'space-around'}}>
              <div style={{height:'100%', width:'40%', display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <img src={atricentlogo} alt="" style={{height:'50%', width:'70%'}}/>
                    </div>
              <NavbarToggler className={`NavbarToggler ${isOpen ? 'collapsed' : ''}`} onClick={toggleNavbar} style={{ height: '5vh', width: '20%'}} />
              </div>
              {!isOpen ? (
                <Collapse isOpen={isOpen} navbar>
                  <Nav  navbar>
                    <NavItem>
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Discover</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Wardrobe</NavLink>
                    </NavItem>
                  </Nav>
                  <div style={{ width: '60%',height:'8vh', display: 'flex', justifyContent:'center', marginLeft:'2%', marginBottom:'3%' }}>
                    <div style={{width:'30%',height:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <img src={atricentlogo} alt="" style={{height:'50%', width:'70%'}}/>
                    </div>
                  </div>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#"><img src={notificationImg} alt="" /></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Login</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Discover</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Wardrobe</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#"><img src={notificationImg} alt="" /></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Login</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              )}
            </Container>
          </Navbar>
        </div>
      );
}

export default NavTop;
