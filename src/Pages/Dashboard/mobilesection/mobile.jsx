import React from 'react'
import './mobile.css'
import { Container } from 'reactstrap';
import mobileImage from '../../../assets/images/iPhone-X-Isometric-View-Mockup 4.png'
import AppleImg from '../../../assets/images/Group 3875.png'
import PlaystoreImg from '../../../assets/images/Group 3876.png'



const Mobile = () => {
  return (
    <Container className='modile-container'>
      <div className='mobile-images'>
        <img src={mobileImage} alt="" />
      </div>
      <div className='main-mobile-div'>
        <div className='mobile-text-div'>
          <h1>You can<br /> download the<br /> apps.</h1>
          <p>For now we are mobile first. We are working hard to bring a web version to you but until then you can easily down on the App Store or Google Play.</p>
        </div>
        <div className='image-apps-div'>
          <a href="https://apps.apple.com/gb/app/atricent-ai-fashion-platform/id6448105847" target="_blank" rel="noopener noreferrer">
            <div className='apple-image-div'>
              <img src={AppleImg} alt="" />
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.atricent&hl=en_US" target="_blank" rel="noopener noreferrer">
            <div className='playstore-image-div'>
              <img src={PlaystoreImg} alt="" />
            </div>
          </a>
        </div>
        
      </div>

    </Container>
  )
}

export default Mobile