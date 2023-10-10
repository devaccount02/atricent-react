import React from 'react'
import './contact.css'
import atricentLogo from '../../../assets/images/Layer 1.png'
import facebook from '../../../assets/images/Facebook.png'
import youtube from '../../../assets/images/youtube-logo-circle-red-social-media-logo_197792-4982.avif'
import tiktok from '../../../assets/images/tiktok-icon-free-png.webp'
import instgram from '../../../assets/images/purple-gradiend-social-media-logo_197792-1883.avif'
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
              <a href="https://www.instagram.com/atricenthq/" target="_blank" rel="noopener noreferrer">
                <img src={instgram} alt="Logo 1" className='fb-img' />
              </a>
              <a href="https://www.youtube.com/channel/UCQUP6oCVUA-wDDPiI0kegvg" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="Logo 2" className='fb-img' />
              </a>
              <a href="https://www.tiktok.com/@atricent" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="Logo 3" className='twitter-img' />
              </a>
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