import React from 'react'
import './contact.css'
import atricentLogo from '../../../assets/images/Layer 1.png'
import youtube from '../../../assets/images/youtube-logo-circle-red-social-media-logo_197792-4982.avif'
import tiktok from '../../../assets/images/tiktok-icon-free-png.webp'
import instgram from '../../../assets/images/purple-gradiend-social-media-logo_197792-1883.avif'
import address from '../../../assets/images/address.png'
import shape from '../../../assets/images/Shape.png'
import telephone from '../../../assets/images/telephone.png'



import {
  Row,
  Col,
} from 'reactstrap';
const Contact = () => {
  return (
    <div className='contact-us-container'>
      <Row>
        <Col xs="12" md="4">
          <div className='contact-first-col'>
            <img src={atricentLogo} alt="Atricent Logo" />

            <p>Copyright © 2023 Atricent, Inc</p>

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
            <h2 style={{fontFamily:'Inter',fontSize: '22px', fontWeight:'500', lineHeight:'27px', letterSpacing:'0em', color:'#282828', opacity:'90%'}}>About Atricent</h2>
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
          <div >
            <h2 style={{fontFamily:'Inter',fontSize: '22px', fontWeight:'500', lineHeight:'27px', letterSpacing:'0em', color:'#282828', opacity:'90%', marginLeft:'2%'}}>Contact Us</h2>
            <p className='address-parent'><span className='address-parent-img'><img src={address} alt="" /></span>Address: 1990 N California Blvd<br /> Ste 20 Walnut Creek, California</p>
            <p className='email-parent'><span className='email-parent-img'><img src={shape} alt="" /></span><p style={{marginRight:'60px'}}>hello@atricent.com</p></p>
            <p className='phone-parent'><span className='phone-parent-img'><img src={telephone} alt="" /></span><p style={{marginRight:'70px'}}>+1 (732) 405-1053</p></p>
          </div>
        </Col>
      </Row>
      <Row>
      <Col >
          <div style={{width:'100%', display:'flex', justifyContent:'center', borderTop:'1px solid lightgray', opacity:'80%'}}>
            <p className='privacy-policy'>Privacy Policy  |  Terms Of Services</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact