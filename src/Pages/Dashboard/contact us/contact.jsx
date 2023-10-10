import React from 'react'
import './contact.css'
import atricentLogo from '../../../assets/images/Layer 1.png'
import facebook from '../../../assets/images/Facebook.png'
import google from '../../../assets/images/Google.png'
import twitter from '../../../assets/images/Twitter.png'
import address from '../../../assets/images/address.png'
import shape from '../../../assets/images/Shape.png'
import telephone from '../../../assets/images/telephone.png'



import {
  Container,
  Row,
  Col,
} from 'reactstrap';
const Contact = () => {
  return (
    <Container className='contact-us-container'>
    <Row>
      <Col xs="12" md="4">
        <div className='contact-first-col'>
          {/* Logo */}
          <img src={atricentLogo} alt="Atricent Logo" />

          <p>Copyright © 2020 Atricent</p>

          <div className='social-media-logos'>
            <img src={facebook} alt="Logo 1" className='fb-img'/>
            <img src={google} alt="Logo 2" className='fb-img'/>
            <img src={twitter} alt="Logo 3" className='twitter-img'/>
          </div>
        </div>
      </Col>

      <Col xs="12" md="4">
        <div>
          <h2>About Atricent</h2>
          <nav className='About-Atricent'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Outfit</li>
              <li>Wardrobe</li>
            </ul>
          </nav>
        </div>
      </Col>

      <Col xs="12" md="4">
        <div>
          <h2>Contact Us</h2>
          <p className='address-parent'><span className='address-parent-img'><img src={address} alt="" /></span>Address: 4th Floor, Business Centre, Gulberg III, Lahore</p>
          <p className='email-parent'><span className='email-parent-img'><img src={shape} alt="" /></span>info@Atricent.com</p>
          <p className='phone-parent'><span className='phone-parent-img'><img src={telephone} alt="" /></span>XXX XXX XXX</p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Contact